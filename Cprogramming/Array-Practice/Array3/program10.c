#include <stdio.h>
void main(){

	int size;
	printf("Enter Size Of Array:\n");
	scanf("%d",&size);

	int arr[size];

	printf("Enter Array Elements:\n");
	for(int i=0;i<size;i++){
		scanf("%d",&arr[i]);
	}

	printf("Sum of Odd Index Elements is: ");

	int sum=0;
	for(int i=0;i<size;i++){
		if(i%2!=0){
			sum=sum+arr[i];
		}
	}
	printf("%d\n",sum);




}
