#include <stdio.h>
void main(){
        int rows;
        printf("Enter No of Rows:\n");
        scanf("%d",&rows);
        int x=1;
        for(int i=1;i<=rows;i++){
                for(int j=rows;j>=i;j--){
                        printf("%d ",x);
			x++;
                }
                printf("\n");
        }
}
