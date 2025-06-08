#include <stdio.h>
void main(){

	int arr[3]={1,2,3};

	printf("%p\n",arr); //0x100
	printf("%d\n",arr[0]); //1
	printf("%d\n",*(arr+0)); //1
}
