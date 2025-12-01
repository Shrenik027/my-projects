#include <stdio.h>
void main(){
	int x;
	printf("Enter no of questions answered between 1 to 5:");
	scanf("%d",&x);

	if(x>=1){
		printf("You will  get passing marks");
	}
        else{
		printf("sorry to inform you but you are failed in viva ");
	}
}
