#include <stdio.h>
void main(){

        int rows;
        printf("Enter Number of Rows: ");
        scanf("%d",&rows);



        
        char ch='A';
        for(int i=1;i<=rows;i++){
		

                for(int j=1;j<=rows;j++){

                        printf("%c ",ch);
		
                     
			

                }
		ch++;
                
                printf("\n");
        }




}
