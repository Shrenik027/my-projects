#include <stdio.h>

void main() {
    int row10 = 4;
    for (int i = 1; i <= row10; i++) {
        int num10 = i;
        for (int j = 1; j <= i; j++) {
            printf("%d ", num10 * num10);
            num10++;
        }
        printf("\n");
    }
}

