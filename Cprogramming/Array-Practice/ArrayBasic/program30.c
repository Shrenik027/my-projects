//closest

#include <stdio.h>


void main(){

	int size;
	printf("Enter size:\n");
	scanf("%d",&size);

	int arr[size];

	printf("Enter Array Elements.\n");

	for(int i=0;i<size;i++){
		scanf("%d",&arr[i]);
	}

	int key;
	printf("Enter Element.\n");
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
        int close;
        for(int i=0;i<size;i++){

		if(arr[i]<=key){
			close=arr[i];
		}

	}
	printf("closest element is:%d.\n",close);
}
