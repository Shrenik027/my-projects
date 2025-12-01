#include <stdio.h>

int Searchelement(int arr[],int size,int ele){
        int index=-1;
	for(int i=0;i<size;i++){

		if(ele == arr[i]){
			index=i;
		}
	}
	return index;
}

void main(){

	int size;
	printf("Enter Size of Array:\n");
	scanf("%d",&size);

	int arr[size];

	printf("Enter Array Elements:\n");

	for(int i=0;i<size;i++){
		scanf("%d",&arr[i]);
	}

	int ele;
	printf("Enter Element:\n");
	scanf("%d",&ele);

	int index = Searchelement(arr,size,ele);
        if(index!=-1){
	      printf("Element is At %dth index.\n",index);
	}
	else{
		printf("Element Not Found.\n");
	}
}
