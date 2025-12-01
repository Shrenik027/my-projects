#include <stdio.h>
void main(){

	int x;
	printf("Enter A Number: ");
	scanf("%d",&x);

	for(int i=2;i<=x;i++){
		if(x%x==0 && x%i!=0){
			printf("%d is prime number",x);
			break;
		}
	        else{
			printf("%d is Not a Prime Number",x);
			break;
		}	
		
	}
}
