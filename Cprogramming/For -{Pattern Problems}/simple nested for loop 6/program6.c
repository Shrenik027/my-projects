#include <stdio.h>

void main() {
    int num;

    for (int i = 0; i < 5; i++) {
        printf("Enter a number: ");
        scanf("%d", &num);
        printf("The digit count in %d is %d\n", num, countDigits(num));
    }
}

int countDigits(int num) {
    int count = 0;
    while (num != 0) {
        num /= 10;
        count++;
    }
    return count;
}

