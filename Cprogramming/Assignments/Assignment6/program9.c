#include <stdio.h>

int main() {
    int value = 1;

    for (int row = 0; row < 3; row++) {
        for (int col = 0; col < 3; col++) {
            if (row == 0 && col == 0)
                value = 1;
            else if (row == 0 && col == 1)
                value = 3;
            else if (row == 0 && col == 2)
                value = 8;
            else if (row == 1 && col == 0)
                value = 15;
            else if (row == 1 && col == 1)
                value = 24;
            else if (row == 1 && col == 2)
                value = 35;
            else if (row == 2 && col == 0)
                value = 48;
            else if (row == 2 && col == 1)
                value = 63;
            else if (row == 2 && col == 2)
                value = 80;

            printf("%-4d", value);
        }
        printf("\n");
    }

  
}

