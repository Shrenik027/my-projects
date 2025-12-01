#include <stdio.h>
void main(){

        int size;
        printf("Enter size of array:\n");
        scanf("%d",&size);

        int arr[size];

        printf("Enter Elements:\n");

        for(int i=0;i<size;i++){

                scanf("%d",&arr[i]);
        
	}

	for(int i=0;i<size-1;i++){

		int minindex=i;

		for(int j=i+1;j<size-1;j++){
			if(arr[minindex] > arr[j]){
				minindex=j;
			}
		}
		int temp=arr[i];
		arr[i]=arr[minindex];
		arr[minindex]=temp;
	
	}
	printf("Sorted Array:\n");

	for(int i=0;i<size;i++){

		printf("%d \n",arr[i]);
	}
}
