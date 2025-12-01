#include <stdio.h>

int main() {
    int start, end;

    
    printf("Enter the start of the range: ");
    scanf("%d", &start);

    printf("Enter the end of the range: ");
    scanf("%d", &end);

    printf("Even numbers in reverse order:\n");
    
    for (int i = end; i >= start; i--) {
        if (i % 2 == 0) {
            printf("%d ", i);
        }
    }

    printf("\nOdd numbers in standard order:\n");
    
    for (int i = start; i <= end; i++) {
        if (i % 2 != 0) {
            printf("%d ", i);
        }
    }

    printf("\n");

    return 0;
}

