#include <stdio.h>
void main(){
	int x;
	printf("Enter No 1: ");
	scanf("%d",&x);

	int y;
        printf("Enter No 2: ");
        scanf("%d",&y);

	int z;
        printf("Enter No 3: ");
        scanf("%d",&z);

	if(x*x==y*y+z*z){
		printf("The Given Numbers Are Pythagorean Triplets\nC");

	}
	else if(y*y==x*x+z*z){
                printf("The Given Numbers Are Pythagorean Triplets\nC");

        }
	else if(z*z==x*x+y*y){
                printf("The Given Numbers Are Pythagorean Triplets\nC");

        }
	else{
		printf("The given numbers are not pythogorean triplets\n");
	}
}
