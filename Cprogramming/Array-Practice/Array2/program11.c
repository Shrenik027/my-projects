#include <stdio.h>
void main(){
	int num;
	printf("Enter a number:\n");
	scanf("%d",&num);
	int rev=0,rem;

	while(num !=0){
		rem = num % 10;
		rev = rev * 10 + rem;
		num=num/10;

	}
	printf("Reverse Number:%d \n",rev);
}
