#include <stdio.h>
void main(){

        int size;
        printf("Enter Size of array:\n");
        scanf("%d",&size);

        int arr[size];
        printf("Enter Array Elements:\n");

        for(int i=0;i<size;i++){
                scanf("%d",&arr[i]);
        }
         
        printf("Reversed array : ");
        for (int i=size-1;i>=0;i--){
                printf("%d ",arr[i]);
        }
	printf("\n");
        
}
