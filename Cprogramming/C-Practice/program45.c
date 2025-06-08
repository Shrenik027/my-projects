#include <stdio.h>
void main(){
	int allowance;
	printf("Enter money:	");
	scanf("%d",&allowance);

	if(allowance>=2500){
		printf("colaba");
	}
	else if(allowance>=2000){
                printf("Gateway");
        }
	else if(allowance>=1500){
                printf("Seawoods");
        }
	else if(allowance>=1000){
                printf("Panvel");
        }
	else if(allowance>=500){
                printf("home");
        }
	else{
		printf("nowhere");
	}
}

