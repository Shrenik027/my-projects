#include <stdio.h>
void main(){

	int num;
	printf("Enter Number:\n");
	scanf("%d",&num);

	int rev=0,rem;

	while (num!=0){
		rem=num%10;
		rev=rev*10+rem;
		num/=10;
	}
	printf("Reversed Number is %d\n",rev);
}
