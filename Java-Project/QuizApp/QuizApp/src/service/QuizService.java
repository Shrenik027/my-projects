package service;

import java.sql.*;
import java.util.Scanner;
import dao.DBConnection;

public class QuizService {

    public static void startQuiz(int userId) {
        try {
            Connection conn = DBConnection.getConnection();
            Scanner sc = new Scanner(System.in);

            int score = 0;

            //  STEP 1: SHOW AVAILABLE QUIZZES
            String quizQuery = "SELECT * FROM quiz";
            PreparedStatement quizPs = conn.prepareStatement(quizQuery);
            ResultSet quizRs = quizPs.executeQuery();

            System.out.println("\n===== AVAILABLE QUIZZES =====");

            while (quizRs.next()) {
                System.out.println(quizRs.getInt("quiz_id") + ". " + quizRs.getString("title"));
            }

            System.out.print("Enter Quiz ID: ");
            int quizId = Integer.parseInt(sc.nextLine());

            //  STEP 2: CREATE ATTEMPT
            String attemptQuery = "INSERT INTO attempts (user_id, quiz_id) VALUES (?, ?)";
            PreparedStatement attemptPs = conn.prepareStatement(attemptQuery, Statement.RETURN_GENERATED_KEYS);
            attemptPs.setInt(1, userId);
            attemptPs.setInt(2, quizId);
            attemptPs.executeUpdate();

            ResultSet keys = attemptPs.getGeneratedKeys();
            int attemptId = 0;
            if (keys.next()) {
                attemptId = keys.getInt(1);
            }

            //  STEP 3: FETCH QUESTIONS BASED ON SELECTED QUIZ
            String query = "SELECT * FROM questions WHERE quiz_id = ?";
            PreparedStatement ps = conn.prepareStatement(query);
            ps.setInt(1, quizId);
            ResultSet rs = ps.executeQuery();

            //  CHECK IF NO QUESTIONS
            if (!rs.isBeforeFirst()) {
                System.out.println("No questions found for this quiz!");
                return;
            }

            //  STEP 4: ASK QUESTIONS
            while (rs.next()) {

                int qid = rs.getInt("question_id");

                System.out.println("\n" + rs.getString("question_text"));
                System.out.println("1. " + rs.getString("option1"));
                System.out.println("2. " + rs.getString("option2"));
                System.out.println("3. " + rs.getString("option3"));
                System.out.println("4. " + rs.getString("option4"));

                System.out.print("Your answer: ");
                int ans = Integer.parseInt(sc.nextLine());

                int correct = rs.getInt("correct_answer");

                if (ans == correct) {
                    score++;
                }

                //  SAVE ANSWER
                String ansQuery = "INSERT INTO answers (attempt_id, question_id, selected_option) VALUES (?, ?, ?)";
                PreparedStatement ansPs = conn.prepareStatement(ansQuery);
                ansPs.setInt(1, attemptId);
                ansPs.setInt(2, qid);
                ansPs.setInt(3, ans);
                ansPs.executeUpdate();
            }

            //  STEP 5: SAVE SCORE
            String scoreQuery = "INSERT INTO scores (attempt_id, total_score) VALUES (?, ?)";
            PreparedStatement scorePs = conn.prepareStatement(scoreQuery);
            scorePs.setInt(1, attemptId);
            scorePs.setInt(2, score);
            scorePs.executeUpdate();

            System.out.println("\n===== QUIZ COMPLETED =====");
            System.out.println("Your Score: " + score);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}