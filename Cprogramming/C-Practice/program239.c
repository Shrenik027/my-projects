#include <stdio.h>
void main(){

        int x=100;
        int *iptr=&x;
        void *vptr=&x;

        printf("%p\n",iptr);
        printf("%p\n",vptr);
        printf("%d\n",*iptr);
 
 	//printf("%d\n",*vptr);  ---> ERROR :invalid use of void pointer
	
	printf("%d\n",*((int*)vptr));
}
