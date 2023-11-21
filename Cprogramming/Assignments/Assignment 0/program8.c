#include <stdio.h>
void main(){
	char x;
	printf("Enter Character: ");
	scanf("%c",&x);

	if(x>=65 && x<=90){
		printf("You Have Entered UPPERCASE Input\n");
	}
	else if(x>=97 && x<=122){
		printf("You Have Entered LOWERCASE Input\n");
	}
}
