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

            // 1. Create attempt
            String attemptQuery = "INSERT INTO attempts (user_id, quiz_id) VALUES (?, ?)";
            PreparedStatement attemptPs = conn.prepareStatement(attemptQuery, Statement.RETURN_GENERATED_KEYS);
            attemptPs.setInt(1, userId);
            attemptPs.setInt(2, 1); // using quiz_id = 1
            attemptPs.executeUpdate();

            ResultSet keys = attemptPs.getGeneratedKeys();
            int attemptId = 0;
            if (keys.next()) {
                attemptId = keys.getInt(1);
            }

            // 2. Fetch questions
            String query = "SELECT * FROM questions WHERE quiz_id = 1";
            PreparedStatement ps = conn.prepareStatement(query);
            ResultSet rs = ps.executeQuery();

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

                // 3. Save answer
                String ansQuery = "INSERT INTO answers (attempt_id, question_id, selected_option) VALUES (?, ?, ?)";
                PreparedStatement ansPs = conn.prepareStatement(ansQuery);
                ansPs.setInt(1, attemptId);
                ansPs.setInt(2, qid);
                ansPs.setInt(3, ans);
                ansPs.executeUpdate();
            }

            // 4. Save score
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