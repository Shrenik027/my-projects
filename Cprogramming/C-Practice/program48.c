#include <stdio.h>
void main(){

	int x;
	printf("enter number between 1 to 5 : ");
	scanf("%d",&x);
        
        switch(x){

		case 1:
			printf("one");
			break;
		case 2:
                        printf("two");
                        break;
		case 3:
                        printf("three");
                        break;
		case 4:
                        printf("four");
                        break;
		case 5:
                        printf("five");
                        break;
		default:
		        printf("wrong input");	
	
	}
	       
}
