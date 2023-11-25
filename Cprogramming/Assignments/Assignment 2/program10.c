#include <stdio.h>

int main() {
    char char1, char2;

    
    printf("Enter the first character: ");
    scanf(" %c", &char1);  
    printf("Enter the second character: ");
    scanf(" %c", &char2);

   
    if (char1 == char2) {
        printf("Characters are equal: %c %c\n", char1, char2);
    }
    else {
        printf("Characters are not equal. Difference: %d\n", char2 - char1);
    }

}

