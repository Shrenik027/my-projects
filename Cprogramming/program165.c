#include <stdio.h>

int main() {
    int row;
    printf("Enter the number of rows: ");
    scanf("%d", &row);

    int a = 0, b = 1;
    for (int i = 1; i <= row; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%d ", a);
            int temp = a + b;
            a = b;
            b = temp;
        }
        printf("\n");
    }

  
}
