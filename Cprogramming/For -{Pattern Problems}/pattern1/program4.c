#include <stdio.h>
void main(){

        int rows;
        printf("Enter Number of Rows: ");
        scanf("%d",&rows);

        int cols;
        printf("Enter Number of Cols: ");
        scanf("%d",&cols);

        int a=1;

        for(int i=1;i<=rows;i++){

                for(int j=1;j<=cols;j++){
                        printf("%d   ",a);
			a++;
                }
                printf("\n");
        }




}
