#include <stdio.h>

void main() {
    int row2 = 5;
    int count = 1;
    for (int i = 1; i <= row2; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%d ", count++);
        }
        printf("\n");
    }
}

