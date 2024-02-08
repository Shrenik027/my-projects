
#include <stdio.h>


void main(){

        int size;
        printf("Enter Size of Array:\n");
        scanf("%d",&size);

        int arr[size];

        printf("Enter Array Elements:\n");

        int sum=1;

        for(int i=0;i<size;i++){
                scanf("%d",&arr[i]);
                sum=sum*arr[i];
        }


        printf("sum=%d\n",sum);


}
