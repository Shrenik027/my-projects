#include <stdio.h>

void main() {
    int rows;
    
    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    int num = 1;
    for (int i = 1; i <= rows; i++) {
        for (int spaces = 1; spaces <= rows - i; spaces++) {
            printf("   ");
        }
        for (int j = 1; j <= i; j++) {
            printf("%d", num);
            num += 3;
            if (j != i) {
                printf("  ");
            }
        }
        printf("\n");
        num = (i + 1) * (i + 1) - i;
    }

}
