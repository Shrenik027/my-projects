
#include <stdio.h>

int a = 10;   //Global Variable


void fun(){

	int x = 20;   //Local Variable
	printf("in fun\n");
           
}


void main(){

	int y = 30;    // Local Variable
	printf("Start Main\n");

	fun();

	printf("End Main\n");

}
