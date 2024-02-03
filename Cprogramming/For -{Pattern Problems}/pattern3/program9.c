#include <stdio.h>
void main(){
        int rows;
        printf("Enter No of Rows:\n");
        scanf("%d",&rows);
        char ch='D';
        char ch1=ch;
        for(int i=1;i<=rows;i++){
                for(int j=rows;j>=i;j--){
			
                        printf("%c ",ch1);
                        ch1--;

                }

                ch1=ch-1;
                ch--;

                printf("\n");
        }
}
