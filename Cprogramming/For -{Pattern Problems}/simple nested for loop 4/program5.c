#include <stdio.h>

void main() {
    int row5 = 4;
    for (int i = 1; i <= row5; i++) {
        char ch = 'A';
        for (int j = 1; j <= i; j++) {
            printf("%c ", ch++);
        }
        printf("\n");
    }
}

