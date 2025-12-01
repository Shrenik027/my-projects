#include <stdio.h>

void main() {
    int start, end;

    printf("Enter start: ");
    scanf("%d", &start);

    printf("Enter end: ");
    scanf("%d", &end);

    printf("Output: Palindrome numbers between %d and %d\n", start, end);
    for (int i = start; i <= end; i++) {
        if (isPalindrome(i))
            printf("%d ", i);
    }

    printf("\n");
}

int isPalindrome(int num) {
    return num == reverseNumber(num);
}

int reverseNumber(int num) {
    int reversed = 0;
    while (num != 0) {
        reversed = reversed * 10 + num % 10;
        num /= 10;
    }
    return reversed;
}

