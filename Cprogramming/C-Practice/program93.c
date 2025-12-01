#include <stdio.h>
void main(){

	int x,y;
	printf("Enter Start Point: ");
	scanf("%d",&x);

	printf("Enter End Point: ");
	scanf("%d",&y);

	for(int i=1;i<=y;i++){

		if(i%2!=0){
			printf("%d ",i*i);
		}
		printf("\n");

	}
}


