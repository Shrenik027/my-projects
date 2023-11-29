#include <stdio.h>

int main() {

    int number, product = 1, digit;


    printf("Enter a number: ");
    scanf("%d", &number);


    while (number != 0) {

        digit = number % 10;

        product = product*digit;

        number = number / 10;
    }


    printf("Sum of digits: %d\n", product);


}
