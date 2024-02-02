#include <stdio.h>
void main(){
        int size,key;
        printf("Enter Array Size:\n");
        scanf("%d",&size);

        int arr[size];

        printf("enter sorted elements:\n");
        for(int i=0;i<size;i++){
                scanf("%d",&arr[i]);
        }

        printf("Enter Element You want to search:\n");
        scanf("%d",&key);

	int start=0;
	int end=size-1;

        int index = (start+((key-arr[start])/(arr[end]-arr[start])*(end-start)));

        printf("The element is at %dth index.\n",index);
}
