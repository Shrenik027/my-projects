#include <stdio.h>
int Sealing(int arr[], int size, int key){

        int store;
        int start=0;
        int end=size-1;

        while(start<=end){

                int mid=(start+end)/2;

                if(arr[mid]==key){
                        store=arr[mid];
                        return store;
                }

                if(arr[mid]<key){
                        start=mid+1;
                        
                }

                if(arr[mid]>key){
                        end=mid-1;
			store=arr[mid];


                }
        }
        return store;
}
void main(){
        int size;
        printf("Enter size of array;\n");
        scanf("%d",&size);

        int arr[size];

        printf("Enter Elements:\n");

        for(int i=0;i<size;i++){

                scanf("%d",&arr[i]);
        }

        int key;
        printf("Enter Number:\n");
        scanf("%d",&key);

        int Sealingval= Sealing(arr,size,key);
        printf("Sealing value is %d\n.",Sealingval);
}
