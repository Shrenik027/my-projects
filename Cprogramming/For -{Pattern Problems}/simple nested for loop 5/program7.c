#include <stdio.h>

int main() {
    int row;
    printf("Enter the number of rows: ");
    scanf("%d", &row);

    int start = 64 + row * 4;
    for (int i = 1; i <= row; i++) {
        int count = start - i;
        for (int j = 1; j <= i; j++) {
            printf("%c ", count--);
        }
        printf("\n");
    }

  
}

