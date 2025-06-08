#include <stdio.h>
char* mystrcpy(char *dest,const char *src){

	while(*src!='\0'){
		*dest=*src;
		dest++;
		src++;
	}
	*dest='\0';
}
void main(){

	char *str1="Virat Kolhi";
	char str2[20];

	puts(str1);
	puts(str2);

	mystrcpy(str2,str1);

	puts(str1);
	puts(str2);

}
