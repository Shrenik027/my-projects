#include <stdio.h>
void main(){

	for(int i=1;i<=4;i++){
		for(int j=1;j<=4;j++){

			if(j%2==0){
				printf("= ");
			}
			else{
				printf("$ ");
			}
		}
		printf("\n");
	}
}
