#include <stdio.h>

void main() {
    int row4 = 4;
    for (int i = 1; i <= row4; i++) {
        for (int j = i; j <= row4; j++) {
            printf("%d ", j);
        }
        printf("\n");
    }
}

