#include <stdio.h>
void main(){

        int size;
        printf("Enter Size of Array:\n");
        scanf("%d",&size);

        int arr[size];

        printf("Enter Array Elements:\n");

        for (int i=0;i<size;i++){
                scanf("%d",&arr[i]);
        }
        
        int min = arr[0];
	for (int i=1;i<size;++i){
		if (arr[i]<min){
			min= arr[i];
		}
	}
	printf("The mininum Element is %d.\n",min);
	
}
