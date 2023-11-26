#include <stdio.h>
void main(){

	int num;
	printf("Enter Number: ");
	scanf("%d",&num);

	if(num%3==0){
		printf("Number is Multiple of 3\n");
	}
	else{
		printf("Number is Not Multiple of 3\n");
	}
}
