#include <stdio.h>
#include <string.h>
#include <stdlib.h>

struct company{

	char Cname[20];
	int Empcount;
	float revenue;
};

void main(){

	struct company *cptr = (struct company*)malloc(sizeof(struct company));

	strcpy(cptr -> Cname,"Veretas");
	cptr -> Empcount=700;
	cptr -> revenue=150.50;

	printf("Company Name=%s\n",cptr -> Cname);
	printf("Employee Count=%d\n",cptr -> Empcount);
	printf("Revenue=%f\n",cptr -> revenue);
}

