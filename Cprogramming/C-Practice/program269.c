#include <stdio.h>
void fun(int);

void main(){

	printf("Start manin\n");
	fun(10);
	printf("End Main\n");
}

void fun(int x){

	printf("In Fun %d\n",x);
}
