#include <stdio.h>

void main() {
    int rows;
    
    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    for (int i = 1; i <= rows; i++) {
        for (int spaces = 1; spaces <= rows - i; spaces++) {
            printf("  ");
        }
        int num = rows;
        for (int j = 1; j <= i; j++) {
            printf("%d ", num);
            num--;
        }
        printf("\n");
    }


}

