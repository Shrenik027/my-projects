#include <stdio.h>

int isComposite(int num) {
    if (num < 2)
        return 0;
    
    for (int i = 2; i <= num / 2; i++) {
        if (num % i == 0)
            return 1; // True, number is composite
    }

    return 0; // False, number is not composite
}

int main() {
    int start, end;

    printf("Enter start: ");
    scanf("%d", &start);

    printf("Enter end: ");
    scanf("%d", &end);

    printf("Output: Composite numbers between %d and %d\n", start, end);
    for (int i = start; i <= end; i++) {
        if (isComposite(i))
            printf("%d ", i);
    }

    printf("\n");
}

