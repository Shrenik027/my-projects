#include <stdio.h>
struct cricplayer{
	char pname[20];
	int jerno;
	float avg;
} obj2={"Ms Dhoni",7,45.25};
void main(){

	struct cricplayer obj1={"Virat Kolhi",18,50.33};

	printf("%s\n",obj1.pname);
	printf("%d\n",obj1.jerno);
	printf("%f\n",obj1.avg);
	printf("%s\n",obj2.pname);
	printf("%d\n",obj2.jerno);
	printf("%f\n",obj2.avg);

}
