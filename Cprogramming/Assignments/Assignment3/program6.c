#include <stdio.h>
void main(){
	int x;
	printf("Enter Number to Factorials: ");
	scanf("%d",&x);

	int fact=1;

	for(int i=1;i<=x;i++){
		fact=fact*i;
		
	}
		printf("%d",fact);
            
}
