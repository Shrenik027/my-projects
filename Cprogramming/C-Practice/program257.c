#include <stdio.h>
int a=10;
int b;
int *iptr=0;
void fun(){

        int x=30;
        printf("%d\n",a);
        printf("%d\n",b);

        iptr=&x;
        
	//int *iptr1=0;
	//iptr1=&x;

        printf("%p\n",iptr);
        printf("%d\n",*iptr);
}
void main(){

        int y=20;

        printf("%d\n",a);
        printf("%d\n",b);

        fun();
        //DANGLING POINTER

        printf("%p\n",iptr);
        printf("%d\n",*iptr);

	//printf("%d\n",iptr1);
	//printf("%d\n",iptr1);


}
