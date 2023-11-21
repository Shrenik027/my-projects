
#include <stdio.h>
void main(){

	int input;
	printf("Enter Number To Verfify Wheather it is +ve or -ve : ");
	scanf("%d",&input);

	if(input<0){
		printf("YOU HAVE ENTERED NEGATIVE NUMBER\n");

	}
	else if(input>0){
		printf("YOU HAVE ENTERED POSITIVE NUMBER\n");
	}
	else{
		printf("YOU HAVE ENTERED 0");
	}
}
