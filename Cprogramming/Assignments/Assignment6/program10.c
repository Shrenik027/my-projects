#include <stdio.h>

int main() {
    int rows;

    
    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    char ch1='D';
    char ch2='A';
    int x=rows;
    int y=1;
    

    // Loop to iterate through rows
    for (int i = 1; i <= rows; i++) {
        // Loop to iterate through columns
        for (int j = 1; j <= rows; j++) {

		if(i%2!=0){
			printf("%c%d ",ch1,x);
			ch1--;
			x--;
		}
		else{
			printf("%c%d ",ch2,y);
			ch2++;
			y++;
		}

		
            
        }
	ch1='D';
        ch2='A';
        x=rows;
        y=1;
        printf("\n");
    }

    
}

