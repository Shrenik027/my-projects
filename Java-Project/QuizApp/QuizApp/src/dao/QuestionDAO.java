package dao;

import java.sql.*;

public class QuestionDAO {

    public void addQuestion(int quizId, String question, String o1, String o2, String o3, String o4, int correct) {
        try {
            Connection conn = DBConnection.getConnection();

            String query = "INSERT INTO questions (quiz_id, question_text, option1, option2, option3, option4, correct_answer) VALUES (?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement ps = conn.prepareStatement(query);

            ps.setInt(1, quizId);
            ps.setString(2, question);
            ps.setString(3, o1);
            ps.setString(4, o2);
            ps.setString(5, o3);
            ps.setString(6, o4);
            ps.setInt(7, correct);

            ps.executeUpdate();

            System.out.println("Question Added!");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void viewQuestions() {
        try {
            Connection conn = DBConnection.getConnection();

            String query = "SELECT * FROM questions";
            PreparedStatement ps = conn.prepareStatement(query);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {
                System.out.println("\nID: " + rs.getInt("question_id"));
                System.out.println("Q: " + rs.getString("question_text"));
                System.out.println("1. " + rs.getString("option1"));
                System.out.println("2. " + rs.getString("option2"));
                System.out.println("3. " + rs.getString("option3"));
                System.out.println("4. " + rs.getString("option4"));
                System.out.println("Correct: " + rs.getInt("correct_answer"));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}