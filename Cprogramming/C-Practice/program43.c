#include <stdio.h>
void main(){
	int x;
	printf("Enter a Number:\n");
	scanf("%d",&x);

	if(x%4==0 && x%5==0){
		printf("Dvisible by 4 and 5\n");
	}

	else{

		printf("Not Dvisible by 4 and 5\n");
	
        }
}	

