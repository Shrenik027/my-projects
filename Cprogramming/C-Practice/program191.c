#include <stdio.h>
void main(){

        int iarr[5]={10,20,30,40,50};
	int x=10;
	char ch='A';

	printf("%d\n",x);
	printf("%c\n",ch);

	printf("%p\n",&x);
	printf("%p\n",&ch);

	printf("%p\n",iarr);
        printf("%p\n",&iarr);
}
