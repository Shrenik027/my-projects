#include <stdio.h>
void main(){
	int x;
	int y;
	int max;

	printf("Enter Number1: ");
	scanf("%d",&x);

	printf("Enter Number2: ");
	scanf("%d",&y);

	if(x>y){
		max=x;
	}
	else{
		max=y;
	}

        while(max%x!=0 || max%y!=0){

		max++;
	}

	printf("The lCM %d and %d is %d",x,y,max);

	
	    
}
