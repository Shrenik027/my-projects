#include <stdio.h>
void main(){

	int num;
	printf("Enter Number You Want to Reverse:\n");
	scanf("%d",&num);
        

	int rem=0,rev=0;
	while(num!=0){

		rem=num%10;
		rev=rev*10+rem;
		num=num/10;
	}
	printf("Reversed NUmbar=%d\n",rev);
}
