#include <stdio.h>
int a=10;
int b;
int *iptr=0;

void fun(){

        int x=30;

        printf("%d\n",a);
        printf("%d\n",b);

        iptr=&x;

        printf("%p\n",iptr);
        printf("%d\n",*iptr);
}
void main(){

         int y=30;

        printf("%d\n",a);
        printf("%d\n",b);
        fun();

        // Dangling pointer
        printf("%p\n",iptr);
        printf("%d\n",*iptr);
}


