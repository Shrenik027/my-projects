package ui;

import java.util.Scanner;
import dao.UserDAO;

public class RegisterUI {

    public static void register() {
        Scanner sc = new Scanner(System.in);

        System.out.println("\n===== REGISTER =====");

        System.out.print("Enter Username: ");
        String username = sc.nextLine();

        System.out.print("Enter Password: ");
        String password = sc.nextLine();

        UserDAO dao = new UserDAO();
        dao.register(username, password);
    }
}