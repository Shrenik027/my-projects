#include <stdio.h>
void main(){

        int arr[5];

        printf("Enter Arrey Elements:\n");
      

        for(int i=0;i<5;i++){
                scanf("%d",&arr[i]);
        }

        printf("Array Elements are:\n");
        
        for(int i=0;i<5;i++){
                if(arr[i]%2==0){
                printf("%d\n",arr[i]);
		}
        }
}
