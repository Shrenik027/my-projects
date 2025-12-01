#include <stdio.h>
void callbyaddress(int*);
void main(){

	int x=10;

	printf("In main x=%d\n",x);
	callbyaddress(&x);
	printf("In main x=%d\n",x);
}

void callbyaddress(int *ptr){

	printf("In Fun x=%d\n",*ptr);

	printf("In Fun add of x=%p\n",ptr);

	*ptr=50;


	printf("In Fun x=%d\n",*ptr);
}
