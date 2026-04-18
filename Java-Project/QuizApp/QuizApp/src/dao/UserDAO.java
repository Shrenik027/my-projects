package dao;

import java.sql.*;
import model.User;

public class UserDAO {

    public User login(String username, String password) {
        User user = null;

        try {
            Connection conn = DBConnection.getConnection();

            String query = "SELECT * FROM users WHERE username=? AND password=?";
            PreparedStatement ps = conn.prepareStatement(query);

            ps.setString(1, username);
            ps.setString(2, password);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                user = new User();
                user.setUserId(rs.getInt("user_id"));
                user.setUsername(rs.getString("username"));
                user.setRole(rs.getString("role"));
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return user;
    }

    // OPTIONAL (good for extra marks)
    public void register(String username, String password) {
        try {
            Connection conn = DBConnection.getConnection();

            String query = "INSERT INTO users (username, password, role) VALUES (?, ?, 'user')";
            PreparedStatement ps = conn.prepareStatement(query);

            ps.setString(1, username);
            ps.setString(2, password);

            ps.executeUpdate();

            System.out.println("User Registered Successfully!");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}