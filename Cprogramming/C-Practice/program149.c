#include <stdio.h>

int main() {
    int rows, i, j, value = 1;


    printf("Enter the number of rows: ");
    scanf("%d", &rows);


    for (i = 0; i < rows; i++) {

        for (j = 0; j < rows; j++) {
            printf("%-4d", value);
            value += 2;
        }
        printf("\n");
    }


}

