#include <stdio.h>

void main() {

	int age = 21;
	float petrolprice = 105.65;
	double gold = 10.432345514514;
	char wings = 'A';
        
	//void v;
	
	printf("%d\n",age);
	printf("%f\n",petrolprice);
	printf("%f\n",gold);	
	printf("%c\n",wings);

	printf("%ld\n",sizeof(int));   //4
	printf("%ld\n",sizeof(float));
	printf("%ld\n",sizeof(double));
	printf("%ld\n",sizeof(char));
        
        
	printf("%ld\n",sizeof(void));
}
