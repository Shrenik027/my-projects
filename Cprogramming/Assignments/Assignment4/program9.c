#include <stdio.h>
void main(){

	int input,reverse=0,rem;
	printf("Enter Integer: ");
	scanf("%d",&input);

	while(input!=0){
		rem= input % 10;
		reverse= reverse * 10 + rem;
		input /= 10;
	}

	printf("Reverse of input is %d",reverse);


}
