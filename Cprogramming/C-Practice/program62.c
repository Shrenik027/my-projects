#include <stdio.h>
void main(){
	int Daysrem;
	printf("Enter Days REmaining for Submission: ");
	scanf("%d",&Daysrem);

	while(Daysrem!=0){
		printf("%d",Daysrem);
		printf(" days remaining\n");

		Daysrem=Daysrem-1;
	
	}

}
