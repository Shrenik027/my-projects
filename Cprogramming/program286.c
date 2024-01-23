#include <stdio.h>
void swap(int,int);
void main(){
	int x=10;
	int y=20;

	printf("In Main x=%d\n",x);
	printf("In Main y=%d\n",y);

	swap(x,y);


	printf("In Main x=%d\n",x);
	printf("In Main y=%d\n",y);
}

void swap(int x,int y){

	
	printf("In Swap x=%d\n",x);
	printf("In Swap y=%d\n",y);

	int temp=x;

	x=y;
	y=temp;

	printf("In Swap x=%d\n",x);
        printf("In Swap y=%d\n",y);
}
