package ui;

import java.util.Scanner;
import dao.QuizDAO;

public class QuizUI {

    public static void addQuiz() {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Quiz Title: ");
        String title = sc.nextLine();

        System.out.print("Enter Category: ");
        String category = sc.nextLine();

        System.out.print("Enter Total Marks: ");
        int marks = Integer.parseInt(sc.nextLine());

        QuizDAO dao = new QuizDAO();
        dao.addQuiz(title, category, marks);
    }
}