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
	
	int sum=0;

		
	for(int i=0;i<size;i++){
		sum=sum+arr[i];
	}
	printf("The Sum of Array Elements IS: %d\n",sum);

}
