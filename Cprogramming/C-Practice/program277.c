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

	int gre=arr[0];

	for (int i=0;i<size;i++){
		if(arr[i]>gre){
			gre=arr[i];

	
		}

	}
	printf("Greatest of Array Element is:%d\n",gre);
}
