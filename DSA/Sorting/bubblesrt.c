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

		for(int j=0;j<size-i-1;j++){

			if(arr[j]>arr[j+1]){

				int temp=arr[j];

				arr[j]= arr[j+1];

				arr[j+1]= temp;
			}
		}
	}
	printf("Sorted array is:\n");
	for(int i=0;i<size;i++){

		printf("%d \n",arr[i]);
	}
}
