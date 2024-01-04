#include <stdio.h>

void main() {
    int row7 = 6;
    char ch = 'F';
    int count7 = 1;
    for (int i = 1; i <= row7; i++) {
        for (int j = 1; j <= i * 2 - 1; j += 2) {
            if (j == 1)
                printf("%c ", ch);
            else
                printf("%d %c ", count7++, ch--);
        }
        printf("\n");
        ch += i + 1;
    }
}

