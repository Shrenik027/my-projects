#include <stdio.h>

int main() {
    int rows, i, j, value;

   
    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    value=rows;

    
    for (i = 1; i <= rows; i++) {
        
        for (j = 1; j <= i; j++) {
            
	    printf("%d ",value);
	    value=value+rows;
	    }
	printf("\n");
        }
        
    

    
}


