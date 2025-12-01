#include <stdio.h>
void main(){
        int rows;
        printf("Enter Rows: ");
        scanf("%d",&rows);

        int a=rows;

        for(int i=1;i<=rows;i++){
                for(int j=1;j<=i;j++){
                        printf("%d ",a);

                }
                a--;
                printf("\n");
        }

}
