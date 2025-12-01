#include <stdio.h>
void main(){

	int start,end;
	printf("Enter Start and End Numbers:\n");
	scanf("%d%d",&start,&end);

	int fact=1;

	for(start;start<=end;start++){

		fact=fact*start;
		printf("Factorial of %d is : %d\n",start,fact);
	}
}
