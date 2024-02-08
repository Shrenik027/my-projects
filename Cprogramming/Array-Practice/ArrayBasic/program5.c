#include <stdio.h>


void main(){

        int size;
        printf("Enter Size of Array:\n");
        scanf("%d",&size);

        int arr[size];

        printf("Enter Array Elements:i\n");



        for(int i=0;i<size;i++){
                scanf("%d",&arr[i]);
                if(arr[i]==0){
                        arr[i]=5;
                }

        }
        for(int i=0;i<size;i++){
                printf("%d",arr[i]);
        }
	printf("\n");





}
