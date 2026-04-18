package ui;

import java.util.Scanner;
import model.User;
import service.QuizService;

public class UserUI {

    public static void userMenu(User user) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("\n===== USER PANEL =====");
            System.out.println("1. Attempt Quiz");
            System.out.println("2. View Score");
            System.out.println("3. Logout");

            System.out.print("Choose option: ");
            int choice = Integer.parseInt(sc.nextLine());

            switch (choice) {

                case 1:
                    QuizService.startQuiz(user.getUserId());
                    break;

                case 2:
                    viewScores(user.getUserId());
                    break;

                case 3:
                    System.out.println("Logging out...");
                    return;

                default:
                    System.out.println("Invalid choice!");
            }
        }
    }

    public static void viewScores(int userId) {
        try {
            java.sql.Connection conn = dao.DBConnection.getConnection();

            String query = "SELECT a.attempt_id, s.total_score, a.attempt_date " +
                           "FROM attempts a JOIN scores s ON a.attempt_id = s.attempt_id " +
                           "WHERE a.user_id = ?";

            java.sql.PreparedStatement ps = conn.prepareStatement(query);
            ps.setInt(1, userId);

            java.sql.ResultSet rs = ps.executeQuery();

            System.out.println("\n===== YOUR SCORES =====");

            while (rs.next()) {
                System.out.println("Attempt ID: " + rs.getInt("attempt_id"));
                System.out.println("Score: " + rs.getInt("total_score"));
                System.out.println("Date: " + rs.getTimestamp("attempt_date"));
                System.out.println("----------------------");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}