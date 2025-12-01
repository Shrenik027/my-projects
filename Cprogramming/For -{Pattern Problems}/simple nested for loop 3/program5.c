#include <stdio.h>

int main() {
    for (int i = 1, num = 10; i <= 4; i++, num++) {
        for (int j = 4; j >= i; j--) {
            printf("%d ", num);
        }
        printf("\n");
    }
  
}

