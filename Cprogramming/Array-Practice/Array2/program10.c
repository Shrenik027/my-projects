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
        printf("elements ");
        for (int i=0;i<size;i++){
		if(arr[i]!=0){
			int rem=arr[i]%10;
			int sum=arr[i]/10;
			if((rem+sum)%2==0){
			printf("%d ",arr[i]);
			}

		}
	}
}


