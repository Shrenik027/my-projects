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
	int even=0;
	int odd=0;
	
	for (int i=0;i<size;i++){
		if(arr[i]%2==0){
			even=even+1;

		}
		if(arr[i]%2!=0){
                        odd=odd+1;
                }
	}
	printf("There are %d Even Numbers.\n",even);
	printf("There are %d Odd Numbers.\n",odd);
}

