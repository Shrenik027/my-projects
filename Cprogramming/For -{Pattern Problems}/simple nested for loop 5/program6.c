#include <stdio.h>

int main() {
    char ch1, ch2;
    printf("Enter two characters: ");
    scanf(" %c %c", &ch1, &ch2);

    if (ch1 == ch2)
        printf("Characters are equal: %c %c\n", ch1, ch2);
    else
        printf("The difference between %c and %c is %d\n", ch1, ch2, ch1 - ch2);

    
}

