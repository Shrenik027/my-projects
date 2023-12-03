#include <stdio.h>

int main() {
    int rows, i, j;

  
    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    
    for (i = 0; i < rows; i++) {
        
        for (j = 4 + i; j > i; j--) {
            printf("%-2d ", j);
        }
        printf("\n");
    }

   
}

