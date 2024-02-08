#include <stdio.h>


void main(){

        int size;
        printf("Enter Size of Array:\n");
        scanf("%d",&size);

        int arr[size];

        printf("Enter Array Elements:\n");

        for(int i=0;i<size;i++){
                scanf("%d",&arr[i]);
        }

	//first lets sort array

	for(int i=0;i<=size-1;i++){

		for(int j=0;j<size-i-1;j++){

			if(arr[j]>arr[j+1]){
				int temp =arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
			}
		}
	}

	int max= arr[size-1];
	int min=arr[0];

       

        

	printf("max element=%d\nmin element=%d\n",max,min);

       
}
