#include <stdio.h>
void main(){

        int arr[5];

        printf("Enter Arrey Elements:\n");
       
        for(int i=0;i<5;i++){
                scanf("%d",&arr[i]);
        }

        printf("sum of Array Elements is:\n");
        int sum=0;
        for(int i=0;i<5;i++){
                sum=sum+arr[i];
               
        }
	printf("%d",sum);
}
