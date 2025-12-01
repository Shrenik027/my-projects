#include <stdio.h>
void main(){

	int arr[10];

	printf("Enter 10 Elements:\n");

	for(int i=0;i<10;i++){

		scanf("%d",&arr[i]);
	}
	printf("Elements which are divisible by 5 are:\n");

	for(int i=0;i<10;i++){

		if(arr[i]%5==0){
			printf("%d\n ",arr[i]);
		}
	}
}
