#include <stdio.h>
int floorx(int arr[],int size , int key){


	int floor;

	for(int i=0;i<size;i++){
		if(arr[i]<=key){
			floor=arr[i];
		}
	}
	return floor;
}
void main(){

	int size;
	printf("Enter size of array:\n");
	scanf("%d",&size);
	int arr[size];
	printf("Enter Elements:\n");
	for (int i=0;i<size;i++){
		scanf("%d",&arr[i]);
	}
	int key;
	printf("Enter No:\n");
	scanf("%d",&key);

	int Floor=floorx(arr,size,key);
	printf("Floor Value is : %d\n",Floor);
}
