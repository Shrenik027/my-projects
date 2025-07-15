#include <stdio.h>
#include <string.h>

struct movie{

	char mname[10];
	int count;
	float rating;
}obj1={"SALAAR",7,9.1};
void main(){

	struct movie obj2={"KGF",6,8.7};

	struct movie *ptr1 = &obj1;
	struct movie *ptr2 = &obj2;
        printf("MOVIE 1 :)\n");
	printf("%s\n",(*ptr1).mname);
	printf("%d\n",(*ptr1).count);
	printf("%0.1f\n",(*ptr1).rating);
        printf("MOVIE 2 :)\n");
	printf("%s\n",ptr2 -> mname);
	printf("%d\n",ptr2 -> count);
	printf("%0.1f\n",ptr2 -> rating);
}
