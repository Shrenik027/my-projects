
#include <stdio.h>
void main(){

	int num;
	printf("ENTER NUMBER: ");
	scanf("%d",&num);

	if(num%2==0){
		printf("THIS NUMBER EVEN\n");
	}
	else if(num=2*num+1){
		printf("THIS NUMBER IS ODD\n");
	}

	else{
		printf("WRONG INPUT\n");
	}
}
