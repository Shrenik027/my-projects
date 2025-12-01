#include <stdio.h>

void main() {
    int row8 = 4;
    int count8 = 10;
    for (int i = 1; i <= row8; i++) {
        for (int j = 1; j <= i; j++) {
            if (j % 2 == 1)
                printf("%c ", count8 + 64);
            else
                printf("%c ", count8-- + 64);
        }
        printf("\n");
    }
}

