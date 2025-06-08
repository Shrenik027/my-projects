#include <stdio.h>

void main(){

        char userData;
        printf("Enter char \n");

        scanf("%c",&userData);
        printf("userData = %c\n",userData);

	if( userData >= 'A' && userData<= 'Z'){
		printf("You have entered uppercase letter\n");
	
	}

	if( userData >='a' && userData<='z'){
		printf("You have entered lowercase letter\n");
	}


	

}
