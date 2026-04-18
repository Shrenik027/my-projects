package ui;

import java.util.Scanner;
import dao.UserDAO;
import model.User;

public class LoginUI {

    public static User login() {
        Scanner sc = new Scanner(System.in);

        System.out.println("\n===== LOGIN =====");
        System.out.print("Username: ");
        String username = sc.nextLine();

        System.out.print("Password: ");
        String password = sc.nextLine();

        UserDAO dao = new UserDAO();
        User user = dao.login(username, password);

        if (user != null) {
            System.out.println("Login Successful!");
        } else {
            System.out.println("Invalid Credentials!");
        }

        return user;
    }
}