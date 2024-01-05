#include <stdio.h>

int factorial(int num) {
    if (num == 0 || num == 1)
        return 1;
    return num * factorial(num - 1);
}

int main() {
    int number;
    printf("Enter a number: ");
    scanf("%d", &number);

    int sum = 0;
    int temp = number;
    while (temp > 0) {
        int digit = temp % 10;
        sum += factorial(digit);
        temp /= 10;
    }

    printf("Addition of factorials of each digit from %d = %d\n", number, sum);

   
}

