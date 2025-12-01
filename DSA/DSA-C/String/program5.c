#include <stdio.h>
char* mystrncpy(char *dest,char *src, int n){

	int count=0;
	while(n!=0 && *src != '\0'){

		*dest =*src;
		dest++;
		src++;
		n--;
		count++;
	}
	*dest='\0';
}

void main(){

	char *str="Shrenik Dubal";
	char name[15];

	int n=7;

	mystrncpy(name,str,n);

	puts(name);
}
