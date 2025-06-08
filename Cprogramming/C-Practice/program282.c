#include <stdio.h>

void printarr(int *ptr,int arrsize){
	for(int i=0;i<arrsize;i++){
		printf("%d \n",*(ptr+i));
	}
}
void main(){
        int size;
        printf("Enter Size:\n");
        scanf("%d",&size);

        int arr[size];


        printf("Enter Elements:\n");
        for(int i=0;i<size;i++){
                scanf("%d",&arr[i]);
                
        }

        printarr(arr,size);
}
