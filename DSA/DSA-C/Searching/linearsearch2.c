#include <stdio.h>

int ifpresent(int arr[],int size,int key){

	int store=-1;

        for(int i=0;i<size;i++){

                if(arr[i]==key){

                        store= i;
                }
        }
        return store;
}
void main(){
        int size,key;
        printf("Enter Array Size:\n");
        scanf("%d",&size);

        int arr[size];

        printf("enter elements:\n");
        for(int i=0;i<size;i++){
                scanf("%d",&arr[i]);
        }

        printf("Enter Element You want to search:\n");
        scanf("%d",&key);

        int index = ifpresent(arr,size,key);

        printf("The elements last occurance at %dth index.\n",index);
}
