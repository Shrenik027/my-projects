#include <stdio.h>

int main() {
    int row;
    printf("Enter the number of rows: ");
    scanf("%d", &row);

    for (int i = 1; i <= row; i++) {
        for (int j = row; j >= 1; j--) {
            printf("%c%d ", 'D' - i + j, j);
        }
        printf("\n");
    }

    
}

