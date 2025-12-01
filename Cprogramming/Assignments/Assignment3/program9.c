#include <stdio.h>

int main() {
    int num;

    printf("Enter a number between 100 and 300: ");
    scanf("%d", &num);

    
    if (num < 100 || num > 300) {
        printf("Please enter a number between 100 and 300.\n");
        return 1;  
    }

    float x = 0;  


    for (float i = 0; i <= num; i += 0.1) {
        if (i * i >= num) {
            x = i;
            break;
        }
    }

    
    printf("Square root of %d is approximately %.2f\n", num, x);

    return 0;
}

       
