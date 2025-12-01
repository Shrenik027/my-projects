#include <stdio.h>
void main(){

	int x;
	printf("Enter Start Point: " );
	scanf("%d",&x);

	int y;
	printf("Enter End Point: " );
	scanf("%d",&y);

	int sum=0;

	for(int i=x;i<=y;i++){
		if(i%5==0){
			sum=sum+i;
		}
	}

	printf("Sum Is: ");		
	printf("%d\n", sum);
}

