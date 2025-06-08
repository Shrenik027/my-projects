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
        printf("array1 Elements are:\n");

        for (int row=0;row<size;row++){

                printf("%d\n ",arr[row]);
        }
	int arr1[size];

	for (int i=0;i<size;i++){

		arr1[i]=arr[i];
	}
        printf("Array2 Elements Are:\n");	

        for (int row=0;row<size;row++){

                printf("%d\n ",arr1[row]);
        }
}
