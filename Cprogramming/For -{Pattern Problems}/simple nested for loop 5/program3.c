#include <stdio.h>

int main() {
    int row;
    printf("Enter the number of rows: ");
    scanf("%d", &row);

    for (int i = 1; i <= row; i++) {
        int num = (i % 2 == 1) ? 5 : 8;
        for (int j = 1; j <= row - i + 1; j++) {
            printf("%d ", num);
            num += (i % 2 == 1) ? -1 : 2;
        }
        printf("\n");
    }

    
}

