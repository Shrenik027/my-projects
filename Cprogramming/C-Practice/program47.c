#include <stdio.h>
void main(){

	int x;
	printf("Enter value between 1 to 5: ");
	scanf("%d",&x);

	if(x==1){
		printf("one\n");
	}
	else if(x==2){
		printf("two\n");
	}
	else if(x==3){
                printf("three\n");
        }
	else if(x==4){
                printf("four\n");
        }
	else if(x==5){
                printf("five");
        }
	else{
		printf("wrong input");
	}
}
