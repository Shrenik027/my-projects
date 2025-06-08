#include <stdio.h>
char* mystrcpy(char *dest,char *src){

	while(*src != '\0'){
		*dest=*src;
		dest++;
		src++;
	}
	*dest='\0';
	
}
struct picnic{

	char location[20];

	int count;

	float distance;
};

void main(){

	struct picnic obj1={"Goa",5,460.50};

	struct picnic obj2;

	mystrcpy(obj2.location,"Kashmir");
	obj2.count=5;
	obj2.distance=1200.50;

	//printf("%d\n",obj1); warning
	printf("%p \n",obj1); //----> Address

	printf("%s\n",obj1.location);
	printf("%d\n",obj1.count);
	printf("%f\n",obj1.distance);
	printf("%s\n",obj2.location);
	printf("%d\n",obj2.count);
	printf("%f\n",obj2.distance);


}
