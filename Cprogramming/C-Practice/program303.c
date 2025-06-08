#include <stdio.h>
void main(){

	char carr[7];

	printf("Enter Characters (plz Enter Lowercase):\n");

	for(int i=0;i<7;++i){
		scanf(" %c",&carr[i]);
	}

	printf("Vowels are:\n");

	for (int i=0;i<7;++i){

		if(carr[i]=='a' || carr[i]=='e' || carr[i]=='i' || carr[i]=='o' || carr[i]=='u' ){

				printf(" %c\n",carr[i]);
	}

    }
}


