#include <stdio.h>

void main() {
    int row6 = 4;
    int num = 1;
    for (int i = 1; i <= row6; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%d ", num++);
        }
        printf("\n");
    }
}

