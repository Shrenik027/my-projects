#include <stdio.h>
void main(){
        int rows;
        printf("Enter No of Rows:\n");
        scanf("%d",&rows);
        int x=1;
        int y=x;
        for(int i=1;i<=rows;i++){
                for(int j=rows;j>=i;j--){
                        printf("%d ",y);
                        y++;

                }

                y=x+1;
                x++;

                printf("\n");
        }
}
