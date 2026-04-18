package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class QuizDAO {

    public void addQuiz(String title, String category, int marks) {
        try {
            Connection conn = DBConnection.getConnection();

            String query = "INSERT INTO quiz (title, category, total_marks) VALUES (?, ?, ?)";
            PreparedStatement ps = conn.prepareStatement(query);

            ps.setString(1, title);
            ps.setString(2, category);
            ps.setInt(3, marks);

            ps.executeUpdate();

            System.out.println("Quiz Added Successfully!");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}