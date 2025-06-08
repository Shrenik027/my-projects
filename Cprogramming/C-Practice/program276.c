#include <stdio.h>
void main(){

	int num;
	printf("Enter Number:\n");
	scanf("%d",&num);

	int sum=0,rem;

	while(num!=0){
		rem=num%10;
		sum=sum+rem;
		num/=10;
	}
	printf("The Sum of digits is:%d\n",sum);
}
