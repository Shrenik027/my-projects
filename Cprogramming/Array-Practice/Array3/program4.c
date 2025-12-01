#include <stdio.h>
void main(){

        int size;
        printf("Enter Size of Array:\n");
        scanf("%d",&size);

        int arr[size];

        printf("Enter Array Elements:\n");

        for(int i=0;i<size;++i){
                scanf("%d",&arr[i]);
        }

        printf("Reversed Array:\n");
        size=size-1;
	for(int i=size;i>=0;--i){
		printf("%d ",arr[i]);
	}
        printf("\n");

}
