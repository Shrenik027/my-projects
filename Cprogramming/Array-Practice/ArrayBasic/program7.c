//Greatest Number that can be formed from entered array.
#include <stdio.h>
void main(){

        int size;
        printf("Enter size:\n");
        scanf("%d",&size);

        int arr[size];

        printf("Enter Digits:\n");

        for(int i=0;i<size;i++){

                scanf("%d",&arr[i]);

        }

         //first lets sort array

        for(int i=0;i<=size-1;i++){

                for(int j=0;j<size-i-1;j++){

                        if(arr[j]<arr[j+1]){
                                int temp =arr[j];
                                arr[j]=arr[j+1];
                                arr[j+1]=temp;
                        }
                }
        }
        printf("Greates Number:\n");

        for(int i=0;i<size;i++){

                printf("%d",arr[i]);
        }
	printf("\n");
}
