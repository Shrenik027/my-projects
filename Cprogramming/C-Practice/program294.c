#include <stdio.h>
void main(){
        int row,col;
        printf("Enter Rows & Cols:\n");
        scanf("%d%d",&row,&col);

        int arr[row][col];


        printf("Enter Elements:\n");
        for(int i=0;i<row;i++){
                for(int j=0;j<col;j++){
                scanf("%d",&arr[i][j]);
                }
        }

        int sum=0;

        for(int i=0;i<row;++i){
                for(int j=0;j<col;++j){
                        sum+=arr[i][j];
                }
        }
        printf("sum =%d\n",sum);
}
