#include <stdio.h>
void main(){
        int rows;
        printf("Enter Rows: ");
        scanf("%d",&rows);

        char ch='c';

        for(int i=1;i<=rows;i++){
                for(int j=1;j<=i;j++){
                        printf("%c ",ch);

                }
                ch--;
                printf("\n");
        }

}
