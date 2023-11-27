#include <stdio.h>
void main(){

	int x=1;
	int y=10;

	while(x==1,y==10){
		for( x;x<=10;){
			printf("%d",x);
			printf("+");
			break;
			x++;
		}
		for( y;y>=1;){
			printf("%d",y);
			printf("=");
			printf("%d\n",x+y);
			break;
			y--;
		}
	}

	

}
