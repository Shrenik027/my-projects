#include <stdio.h>
int a=10;
int b;
void fun(){

	int x=30;
	printf("%d\n",a);
	printf("%d\n",b);
	//printf("%d\n",y);  ERROR
}
void main(){

	int y=20;

	printf("%d\n",a);
	printf("%d\n",b);
	//printf("%d\n",x);  ERROR



}
