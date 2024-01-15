#include <stdio.h>
void main(){

         int x=10;
         int y=20;

        char *ptr1 =&x;
        printf("%d\n",*ptr1);

        printf("%d\n",*(ptr1+1));
}
