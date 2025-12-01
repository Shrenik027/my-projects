#include <stdio.h>
void main(){
	int x;
	printf("Enter angle 1: ");
	scanf("%d",&x);

	int y;
        printf("Enter angle 2: ");
        scanf("%d",&y);

	int z;
        printf("Enter angle 3: ");
        scanf("%d",&z);

	if(x+y+z<=180){
		printf("Its A valid Triangle\n");
	}
	else if(x+y+z>=180){
		printf("Its not a valid traingle\n");
	}
}
