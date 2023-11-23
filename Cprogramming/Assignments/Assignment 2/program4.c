#include <stdio.h>
void main(){
        int Mn;

        printf("Enter Month Number To Get Number Of Days: ");
        scanf("%d",&Mn);

	int a;
	a=1,3,5,7,8,10,12;
	int b;
	b=2;
	int c;
	c=4,6,9,11;

        if(Mn==a){
                printf("%d",Mn);
                printf(" have 31 days\n");

        }
        
	else if(Mn==b ){
		printf("%d",Mn);
		printf(" have 28 days [in leap year days are 29]");
	}
	else if(Mn==c){
		printf("%d",Mn);
	        printf(" have 30 days\n");
	}

        


}
