#include <stdio.h>

void main() {
    int start, end;

    printf("Enter start: ");
    scanf("%d", &start);

    printf("Enter end: ");
    scanf("%d", &end);

    printf("Output: Perfect numbers between %d and %d\n", start, end);
    for (int i = start; i <= end; i++) {
        if (isPerfect(i))
            printf("%d ", i);
    }

    printf("\n");
}

int isPerfect(int num) {
    int sum = 0;
    for (int i = 1; i <= num / 2; i++) {
        if (num % i == 0)
            sum += i;
    }
    return sum == num;
}

