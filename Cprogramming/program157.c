#include <stdio.h>

int main() {
    int row = 4;
    int count = 10;
    for (int i = 1; i <= row; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%d ", count);
            count--;
        }
        printf("\n");
    }
    
}

