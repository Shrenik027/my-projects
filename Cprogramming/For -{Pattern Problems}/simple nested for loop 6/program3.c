#include <stdio.h>

void main() {
    int start, end;

    printf("Enter start: ");
    scanf("%d", &start);

    printf("Enter end: ");
    scanf("%d", &end);

    printf("Output: Perfect squares between %d and %d\n", start, end);
    for (int i = start; i <= end; i++) {
        int square_root = 0;
        for (int j = 1; j * j <= i; j++) {
            if (j * j == i) {
                square_root = j;
                break;
            }
        }
        if (square_root != 0)
            printf("%d ", i);
    }

    printf("\n");
}

