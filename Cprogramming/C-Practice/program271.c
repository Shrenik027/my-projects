#include <stdio.h>
void swap(int*,int*);

void main(){

	int x=10;
	int y=20;

	printf("x=%d\n",x);
	printf("y=%d\n",y);

	swap(&x,&y);

	printf("x=%d\n",x);
	printf("y=%d\n",y);
}

void swap(int *ptr1,int *ptr2){

	int temp=*ptr1;

	*ptr1=*ptr2;
	*ptr2=temp;
}
