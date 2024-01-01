#include <stdio.h>

int main() {
    for (int i = 1; i <= 4; i++) {
        for (int j = i, num = 9; j >= 1; j--, num--) {
            printf("%d ", num);
        }
        printf("\n");
    }
   
}

