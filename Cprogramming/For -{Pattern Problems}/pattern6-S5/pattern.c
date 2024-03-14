#include <stdio.h>

void main() {
    int rows;
    
    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    char ch = 'd';

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < i; j++) {
            printf("    ");
        }
        for (int j = i; j < rows; j++) {
            if (j != rows - 1) {
                printf("%c   ", ch);
            } else {
                printf("%c", ch);
            }
        }
        ch--;
        printf("\n");
    }
}
