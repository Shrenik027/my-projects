//last occ of 1

#include <stdio.h>



int lastocc(int arr[],int size,int key){
        int store=-1;
        for(int i=0;i<size;i++){

                if(arr[i]==key){
                        store=i;
                       
                }
        }
        return store;
}
void main(){

	int size;
	printf("Enter size:\n");
	scanf("%d",&size);

	int arr[size];

	printf("Enter Array Elements.\n");

	for(int i=0;i<size;i++){
		scanf("%d",&arr[i]);
	}

	int key;
	printf("Enter Element.\n");
	scanf("%d",&key);
	int last=lastocc(arr,size,key);


	printf("Last occurance:%d.\n",last);
}
