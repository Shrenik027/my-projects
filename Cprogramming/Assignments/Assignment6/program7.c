#include <stdio.h>

int main() {
    int rows;

    
    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    int count = 1;

    
    for (int i = 1; i <= rows; i++) {
        
    	    for (int j = 1; j <= rows; j++) {
            if (i % 2 == 0) {
                
                printf("%-5d", count * count);
                count++;
            } else {
                
                printf("%-5d", count);
                count++;
            }
        }

        
        printf("\n");
    }

 
}

