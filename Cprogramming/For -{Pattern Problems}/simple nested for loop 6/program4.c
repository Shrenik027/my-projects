#include <stdio.h>

void main() {
    int start, end;

    printf("Enter start: ");
    scanf("%d", &start);

    printf("Enter end: ");
    scanf("%d", &end);

    printf("Output: Perfect cubes between %d and %d\n", start, end);
    for (int i = start; i <= end; i++) {
        int cube_root = 0;
        for (int j = 1; j * j * j <= i; j++) {
            if (j * j * j == i) {
                cube_root = j;
                break;
            }
        }
        if (cube_root != 0)
            printf("%d ", i);
    }

    printf("\n");
}

