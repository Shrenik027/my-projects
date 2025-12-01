#include <stdio.h>
void main(){

        int size;

        printf("Enter Size of arry:\n");
        scanf("%d",&size);

        int arr[size];

        printf("Enter Elements:\n");

        for (int row=0;row<size;row++){

                scanf("%d",&arr[row]);

        }
        printf("array Elements are:\n");

        for (int row=0;row<size;row++){

                printf("%d\n ",arr[row]);
        }
	printf("Array Elements In Reverse Order are:\n");

	for (int row=size;row>=0;row--){
		printf("%d \n",arr[row]);
	}
}
