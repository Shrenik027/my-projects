#include <stdio.h>

void main() {
    int row3 = 4;
    for (int i = 1; i <= row3; i++) {
        int num = 10 - i;
        for (int j = 1; j <= i; j++) {
            printf("%d ", num++);
        }
        printf("\n");
    }
}

