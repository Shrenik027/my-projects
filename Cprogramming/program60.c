#include <stdio.h>
void main(){

	int x =123;
	int ren;
	while(x!=0){
		ren = x%10;
		printf("%d",ren);

		x=x/10;
	
	}
}
