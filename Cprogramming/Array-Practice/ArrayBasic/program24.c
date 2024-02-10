#include <stdio.h>
int floorval(int arr[],int size,int key){

	int floor=-1;

	for(int i=0;i<size;i++){
		if(arr[i]<=key){
			floor=arr[i];
			
		}
	}
	return floor;

}


int ceilval(int arr[],int size,int key){

	int ceil=-1;

	for(int i=0;i<size;i++){
		if(arr[i]>=key){
			ceil=arr[i];
			break;

		}
	
	}
	return ceil;
}

void main(){
	int size;
	printf("Enter Size:\n");
	scanf("%d",&size);
	int arr[size];

	printf("Enter Array Elements:\n");

	for(int i=0;i<size;i++){
		scanf("%d",&arr[i]);
	}
	int key;
	printf("Enter key:\n");
	scanf("%d",&key);
	 for(int i=0;i<=size-1;i++){

                for(int j=0;j<size-i-1;j++){

                        if(arr[j]>arr[j+1]){
                                int temp =arr[j];
                                arr[j]=arr[j+1];
                                arr[j+1]=temp;
                        }
                }
        }
	int floor=floorval(arr,size,key);
	int ceil=ceilval(arr,size,key);

	printf("Floor=%d , ceil=%d.\n",floor,ceil);
}
