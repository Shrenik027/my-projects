#include <stdio.h>
void main(){

	int a=10;
	char ch='A';

	int *ptr1=&a;
	char *ptr2=&ch;


	printf("%p\n",ptr1);
	printf("%p\n",ptr2);

	printf("%d\n",*ptr1);
	printf("%d\n",*ptr2);
}
