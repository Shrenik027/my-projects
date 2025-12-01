#include <stdio.h>

int main() {
    int row;
    printf("Enter the number of rows: ");
    scanf("%d", &row);

    char symbol = '$';
    for (int i = 1; i <= row; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%c ", symbol);
        }
        symbol += 2;
        printf("\n");
    }

   
}

