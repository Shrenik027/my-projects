#include <stdio.h>
void main(){
        int row;
        printf("Enter no Of Rows: ");
        scanf("%d",&row);
        for(int i=1;i<=row;i++){
                int x=1;
                char ch='A';
                for(int j=i;j>=i;j--){
                        if(j%2==0){
                                printf("%d",x);
                                x++;
                        }
                        else{
                                printf("%c",ch);
                                ch++;
                        }
                }
        }
}
