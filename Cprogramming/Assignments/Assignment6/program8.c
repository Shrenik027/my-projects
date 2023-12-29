#include <stdio.h>

int main() {
    int row, col, num = 18;

    for (row = 1; row <= 3; row++) {
        for (col = 1; col <= 3; col++) {
            printf("%d ", num);
            num -= 2;
        }
        printf("\n");
    }

}

