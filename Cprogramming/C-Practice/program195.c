#include <stdio.h>
void main(){

        int arr[5];

        printf("Enter Arrey Elements:\n");
        /*scanf("%d",&arr[0]);
        scanf("%d",&arr[1]);
        scanf("%d",&arr[2]);
        scanf("%d",&arr[3]);
        scanf("%d",&arr[4]);*/

        for(int i=0;i<5;i++){
                scanf("%d",&arr[i]);
        }

        printf("Array Elements are:\n");
        /*printf("%d\n",arr[0]);
        printf("%d\n",arr[1]);
        printf("%d\n",arr[2]);
        printf("%d\n",arr[3]);
        printf("%d\n",arr[4]);*/

        for(int i=0;i<5;i++){

                printf("%d\n",arr[i]);
        }
}
