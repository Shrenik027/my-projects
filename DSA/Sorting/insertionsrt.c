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
	
	for(int i=1;i<size;i++){

		int key=arr[i];

		int j=i-1;

		while(j>=0 && arr[j] >key){
			arr[j+1] = arr[j];
			j = j-1;

		}
		arr[j+1]=key;
	}
	
        printf("Sorted Array :\n");

        for(int i=0;i<size;i++){

                printf("%d \n",arr[i]);
        
	}
}
	
