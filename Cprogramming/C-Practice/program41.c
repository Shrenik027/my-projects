#include <stdio.h>
void main(){

        int x=1;
	printf("Start MAin\n");

	if(--x){
		printf("IN first if block\n");
	}
	if(++x || x++){
		printf("in second if block\n");
	}
	printf("%d\n",x);
	printf("End Code");
}
