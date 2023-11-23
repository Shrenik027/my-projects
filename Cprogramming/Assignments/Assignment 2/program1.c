#include <stdio.h>
void main(){
	int input;
	printf("Enter Year: ");
	scanf("%d",&input);

	if(input%4==0){
		printf("%d",input );
		printf(" is a leap year\n");
	}
	else{
		printf("%d\n",input );
		printf(" is not a leap year\n");
	}
}
