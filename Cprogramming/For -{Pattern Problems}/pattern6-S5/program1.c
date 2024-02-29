#include <stdio.h>

void main() {
    int rows, i, j;

    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    for (i = 1; i <= rows; i++) {
        for (j = 1; j <= rows - i; j++) {
            printf("   ");
        }
        for (j = 1; j <= i; j++) {
            if (j == i) {
                printf("%d", j);
            } else {
                printf("%d  ", j);
            }
        }
        printf("\n");
    }
}

