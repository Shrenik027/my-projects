#include <stdio.h>
void main(){
	int x;
	printf("ENTER NUMBER: ");
	scanf("%d",&x);

	if(x<10){
		printf("This Number Is Less Than 10\n");
	}
	else if(x>10){
		printf("This Number IS Greater Than 10");
	}
	else{
		printf("This Number IS Equal to 10");
	}

}
