#include <stdio.h>

int main() {
    int rows;
    printf("Enter rows: ");
    scanf("%d",&rows);

    for (int i = 1; i <= rows; i++) {
        int value = i;
        for (int j = 1; j <= i; j++) {
            printf("%-4d", value);
            value += i;
        }
        printf("\n");
    }


}

