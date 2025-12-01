#include <stdio.h>

int main() {
    int start, end;
    printf("Enter start number: ");
    scanf("%d", &start);
    printf("Enter end number: ");
    scanf("%d", &end);

    printf("Even numbers in reverse order: ");
    for (int i = end; i >= start; i--) {
        if (i % 2 == 0)
            printf("%d ", i);
    }

    printf("\nOdd numbers in standard order: ");
    for (int i = start; i <= end; i++) {
        if (i % 2 != 0)
            printf("%d ", i);
    }

   
}

