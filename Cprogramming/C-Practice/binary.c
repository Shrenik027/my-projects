#include <stdio.h>
int Binarysearch(int arr[],int size,int key){

	int start=0;
	int end=size-1;


	while(start<=end){

		int mid=start+end/2;
		if(arr[mid]==key){

			return mid;
		}
		if(key<arr[mid]){
			end=mid-1;
		}
		if(key>arr[mid]){
			start=mid+1;
		}
	}
	return -1;
}

void main(){

	int size,key;
	printf("Enter size of array:\n");
	scanf("%d",&size);

	int arr[size];

	printf("Enter array elements.\n");

	for(int i=0;i<size;i++){
		scanf("%d",&arr[i]);
	}

	printf("Enter Key:\n");
	scanf("%d",&key);

	int index=Binarysearch(arr,size,key);

	printf("%d is at %dth index\n",key,index);
}

