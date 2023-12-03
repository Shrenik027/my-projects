#include <stdio.h>

int main() {
    
    char ch1;
    printf("Enter Character for odd rows: ");
    scanf("%c",&ch1);

    char ch2;
    printf("Enter Character for even rows: ");
    scanf(" %c",&ch2);

    int rows;
    printf("Enter Rows: ");
    scanf("%d",&rows);
   
    for (int i = 1; i < 5; i++) {
	    
        
        for (int j = 4; j >=1; j--) {
		if(i%2==0){
			printf("%c ",ch2);
			ch2--;
		}
		else{
			printf("%c ",ch1);
			ch1--;
		}
            
            
        }
	ch2=ch2+2;
	ch1=ch1+2;
        printf("\n");
    }

    
}

