package ui;

import java.util.Scanner;
import dao.QuestionDAO;

public class QuestionUI {

    public static void addQuestion() {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Quiz ID: ");
        int quizId = Integer.parseInt(sc.nextLine());

        System.out.print("Enter Question: ");
        String question = sc.nextLine();

        System.out.print("Option 1: ");
        String o1 = sc.nextLine();

        System.out.print("Option 2: ");
        String o2 = sc.nextLine();

        System.out.print("Option 3: ");
        String o3 = sc.nextLine();

        System.out.print("Option 4: ");
        String o4 = sc.nextLine();

        System.out.print("Correct Option (1-4): ");
        int correct = Integer.parseInt(sc.nextLine());

        QuestionDAO dao = new QuestionDAO();
        dao.addQuestion(quizId, question, o1, o2, o3, o4, correct);
    }

    public static void viewQuestions() {
        QuestionDAO dao = new QuestionDAO();
        dao.viewQuestions();
    }
}