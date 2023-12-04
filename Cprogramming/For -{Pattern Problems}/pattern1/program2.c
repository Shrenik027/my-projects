#include <stdio.h>
void main(){

        int x,y;
        printf("Enter Start Point: ");
        scanf("%d",&x);

        printf("Enter End Point: ");
        scanf("%d",&y);

        for(int i=y;i>=x;i--){

                if(i%3==0 && i%7==0){
                        printf("%d ",i);
                }
                //printf("\n");

        }
}
