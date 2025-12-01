#include <stdio.h>

int binarysearch(int arr[],int size,int key){

        int start=0;
        int end=size-1;

        while(start<=end){
		int mid=(start+end)/2;

                if(arr[mid]==key){

                      return mid;
                }
		if(arr[mid]<key){
			start=mid+1;
		}
		if(arr[mid]>key){
			end=mid-1;
		}
        }
        return -1;
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

        int index = binarysearch(arr,size,key);

        printf("The elements is at %dth index.\n",index);
}
