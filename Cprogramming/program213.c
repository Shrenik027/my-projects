#include <stdio.h>

int a=10;
char b='A';
void main(){

	float x=25.5;
        double d=35.555;

	int *ptr1=&a;
	char *ptr2=b;
	float *ptr3=&x;
	double *ptr4=&d;

	printf("%p\n",ptr1);   //0x100
	printf("%p\n",ptr2);   //0x65
	printf("%p\n",ptr3);   //0x300
	printf("%p\n",ptr4);   //0x400

	printf("%d\n",*ptr1);   //10
	printf("%c\n",*ptr2);   //Segmentation fault
	printf("%f\n",*ptr3);
	printf("%lf\n",*ptr4);
	
}
