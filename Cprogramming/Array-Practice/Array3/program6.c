#include <stdio.h>
void main(){
	int x,y;
	printf("Enter values of x and y\n");
	scanf("%d%d",&x,&y);

	int *ptr1=&x;
	int *ptr2=&y;
	int c=(*ptr1);

	x=(*ptr2);
	y=c;
        

	printf("x=%d ",x);
	printf("y=%d\n",y);
	




}
