#include <stdio.h>

int isPrime(int num) {
    if (num < 2)
        return 0;
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0)
            return 0;
    }
    return 1;
}

int main() {
    int start, end;
    printf("Enter starting number: ");
    scanf("%d", &start);
    printf("Enter ending number: ");
    scanf("%d", &end);

    printf("Series = ");
    for (int i = start; i <= end; i++) {
        if (isPrime(i))
            printf("%d ", i);
    }

   
}

