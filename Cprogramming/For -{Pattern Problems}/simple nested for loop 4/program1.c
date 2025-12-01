#include <stdio.h>

void main() {
    int row1 = 4;
    for (int i = 1; i <= row1; i++) {
        for (int j = row1 * 2; j >= 1; j--) {
            if (j <= 2 * i) {
                printf("C2W%d ", j);
            }
        }
        printf("\n");
    }
}

