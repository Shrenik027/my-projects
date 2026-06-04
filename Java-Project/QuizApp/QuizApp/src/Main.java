import model.User;
import ui.LoginUI;
import ui.RegisterUI;
import ui.AdminUI;
import ui.UserUI;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("\n===== ONLINE QUIZ SYSTEM =====");
System.out.println("1. Login");
System.out.println("2. Register");
System.out.println("3. Exit");
System.out.print("Choose option: ");

int choice = Integer.parseInt(sc.nextLine());

            switch (choice) {

    case 1:
        User user = LoginUI.login();

        if (user != null) {
            System.out.println("Welcome " + user.getUsername());

            if (user.getRole().equals("admin")) {
                AdminUI.adminMenu();
            } else {
                UserUI.userMenu(user);
            }
        }
        break;

    case 2:
        RegisterUI.register();
        break;

    case 3:
        System.out.println("Exiting...");
        System.exit(0);

    default:
        System.out.println("Invalid choice!");
}
        }
    }
}