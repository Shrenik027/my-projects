#include <stdio.h>
int retVal(int);
void main(){

	int x=10;
		int ret=retVal(x);
	printf("%d\n",ret);
}
int retVal(int x){
	int y=x+10;
	int z=y+20;

	return (z,y,x);

}

