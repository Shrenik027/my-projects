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

                printf("%d \n",arr[row]);

        }

        printf("Even Elements are:\n");
	int Epdt=1;


        for (int row=0;row<size;row++){
                if(arr[row]%2==0){

                printf("%d \n",arr[row]);
		Epdt=Epdt*arr[row];
                }

        }
	printf("Product Of Even Numbers:");
	printf("%d\n ",Epdt);

}

