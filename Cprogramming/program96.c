#include <stdio.h>
void main(){

        int rows;
        printf("Enter Number of Rows: ");
        scanf("%d",&rows);

       

        int a=1;

        for(int i=1;i<=rows;i++){

                for(int j=1;j<=rows;j++){
                        printf("%d   ",a);
                        
                }
		a++;
                printf("\n");
        }




}

