#include <stdio.h>
void main(){
        int no1;
        int no2;
        int no3;

        printf("Enter Number 1: ");
        scanf("%d",&no1);

        printf("Enter Number 2: ");
        scanf("%d",&no2);

        printf("Enter Number 3: ");
        scanf("%d",&no3);

        if(no1<no2 && no1<no3){
                printf("%d",no1);
                printf(" is smaller\n");
                
        }
        else if(no2<no1 && no2<no3){

                printf("%d",no2);
                printf(" is smaller\n");
                
        }
        else if(no3<no1 && no3<no2){
                printf("%d",no3);
                printf(" is smaller\n");
                
        }
       
}
