#include <stdio.h>
#include <string.h>

struct cricplayer{

	int jerno;
	char pname[20];
	float sal;

}obj1 = {18,"Virat",5.0};

void main(){

	struct cricplayer obj2;
	obj2.jerno=45;
	strcpy(obj2.pname,"Rohit");
	obj2.sal=5.0;

	printf("Player1:\n");

        printf("%d\n",obj1.jerno);
	printf("%s\n",obj1.pname);
	printf("%0.1f\n",obj1.sal);

	printf("Player2:\n");

        printf("%d\n",obj2.jerno);
	printf("%s\n",obj2.pname);
	printf("%0.1f\n",obj2.sal);


	
}	
