#include <stdio.h>
void main(){
        int size;
        printf("Enter Size of Array:\n");
        scanf("%d",&size);

        int arr[size];
        printf("Enter Elements of array 1:\n");

        for(int i=0;i<size;i++){
                scanf("%d",&arr[i]);

        }
         int arr1[size];
        printf("Enter Elements of array 2:\n");

        for(int i=0;i<size;i++){
                scanf("%d",&arr1[i]);
        }


        int arr2[size];
        for(int i=0;i<size;i++){
                arr2[i]=arr[i]+arr1[i];
        }
         printf("array of addition is:  ");
        for(int i=0;i<size;i++){
         printf("%d ",arr2[i]);
        }
}
