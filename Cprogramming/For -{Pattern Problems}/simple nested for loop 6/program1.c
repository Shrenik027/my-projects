#include <stdio.h>

int main() {
    int lower_limit, upper_limit, count = 0;

    printf("Enter a lower limit: ");
    scanf("%d", &lower_limit);

    printf("Enter upper limit: ");
    scanf("%d", &upper_limit);

    printf("Output: ");
    for (int i = lower_limit; i <= upper_limit; i++) {
        if (i % 5 == 0 && i % 2 == 0) {
            printf("%d ", i);
            count++;
        }
    }

    printf("\nCount = %d\n", count);
}

