#include <stdio.h>
void main(){

	int x;
	printf("Enter Number: ");
	scanf("%d",&x);

	if(x%5==0 && x%11==0){
		printf("This number is divisible by 4 and 11\n");
	}
	else{
		printf("This number is not divisible by 4 and 11\n");
	}
}
