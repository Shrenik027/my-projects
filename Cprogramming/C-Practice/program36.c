#include <stdio.h>

void main(){

        float income;
        printf("Enter income \n");

        scanf("%f",&income);
        printf("income = %f\n",income);

        if( income >= 0 && income<= 500000){
                printf("You have to pay tax of 0%\n");

        }

        if( income >= 500000 && income<=1000000){
                printf("You have to pay tax of 10%\n");
        }


        if( income >= 1000000 && income<= 1500000){
		printf("you have to pay tax of 15%\n");
	
	}


        if( income >= 1500000 && income<= 2000000){
		printf("you have to pay tax of 20%\n");
	}

	if( income >2000000){
		printf("you have to pay tax of 30%\n");
	
	}
}
