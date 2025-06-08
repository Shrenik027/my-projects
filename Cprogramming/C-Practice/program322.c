#include <stdio.h>
char* mystrwr(char *str){
	while(*str != '\0'){

		if(*str>=65 && *str<=90){

			*str=*str+32;
		}
		str++;
	}
	return str;
}
void main(){
	char str[10]={'s','H','r','E','\0'};
	puts(str);
	mystrwr(str);

	puts(str);
}
