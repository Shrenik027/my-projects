#include <stdio.h>

void main() {
    int start, end;

    printf("Enter starting number: ");
    scanf("%d", &start);

    printf("Enter ending number: ");
    scanf("%d", &end);

    printf("Output: Strong numbers between %d and %d\n", start, end);
    for (int i = start; i <= end; i++) {
        if (isStrong(i))
            printf("%d ", i);
    }

    printf("\n");
}

int isStrong(int num) {
    int originalNum = num;
    int sum = 0;
    while (num != 0) {
        int digit = num % 10;
        int fact = 1;
        for (int j = 1; j <= digit; j++)
            fact *= j;
        sum += fact;
        num /= 10;
    }
    return sum == originalNum;
}

