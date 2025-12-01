#include <stdio.h>
void main(){
        int rows;
        printf("Enter No of Rows:\n");
        scanf("%d",&rows);
        
        for(int i=1;i<=rows;i++){
		char ch='a';
                for(int j=rows;j>=i;j--){
                        printf("%c ",ch);
                        ch++;
                }
                printf("\n");
        }
}
