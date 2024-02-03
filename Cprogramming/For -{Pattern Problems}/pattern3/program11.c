#include <stdio.h>
void main(){
        int rows;
        printf("Enter No of Rows:\n");
        scanf("%d",&rows);
     
       
        for(int i=1;i<=rows;i++){
		int num=4;
                for(int j=rows;j>=i;j--){

                        printf("%d ",num);
                        num--;

                }

               

                printf("\n");
        }
}
