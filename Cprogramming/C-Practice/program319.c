#include <stdio.h>

int mystrlen(char *str){

	int count=0;
	while(*str!=0){
		count++;
		str++;
	}
	return count;
}
void main(){
	char name[10]={'K','L','R','a','h','u','l','\0'};
	char *str1="Virat kolhi";
	
	printf("%d\n",mystrlen(name));
	printf("%d\n",mystrlen(str1));
}
