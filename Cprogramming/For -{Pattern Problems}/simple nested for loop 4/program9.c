#include <stdio.h>

void main() {
    int row9 = 4;
    int base = 1;
    for (int i = 1; i <= row9; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%d ", base * base * base);
            base++;
        }
        printf("\n");
    }
}

