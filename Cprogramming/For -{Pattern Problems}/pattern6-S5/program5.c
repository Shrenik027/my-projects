#include <stdio.h>

void main() {
    int rows;
    
    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    char ch = 'a' + rows - 1;

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < rows - i - 1; j++) {
            printf("   ");
        }
        for (int j = 0; j <= i; j++) {
            if (j != 0) {
                printf(" ");
            }
            printf("%c", ch++);
        }
        ch = 'a' + rows - 1 - i - 1;
        for (int j = 0; j < i; j++) {
            printf(" %c", ch++);
        }
        printf("\n");
    }


}
