package ui;

import java.util.Scanner;

public class AdminUI {

    public static void adminMenu() {
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("\n===== ADMIN PANEL =====");
            System.out.println("1. Add Quiz");
            System.out.println("2. Add Question");
            System.out.println("3. View Questions");
            System.out.println("4. Logout");

            System.out.print("Choose option: ");
            int choice = Integer.parseInt(sc.nextLine());

            switch (choice) {
                case 1:
                    QuizUI.addQuiz();
                    break;
                case 2:
                    QuestionUI.addQuestion();
                    break;
                case 3:
                    QuestionUI.viewQuestions();
                    break;
                case 4:
                    System.out.println("Logging out...");
                    return;
                default:
                    System.out.println("Invalid choice!");
            }
        }
    }
}