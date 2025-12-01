#include <stdio.h>
void main(){

	int x;
	printf("Enter Number: ");
	scanf("%d",&x);

	int a,b;
	printf("Enter Starting point of Range: ");
	scanf("%d",&a);

	printf("Enter Ending point of Range: ");
        scanf("%d",&b);

	for(int i=a;i<=b;i++){
		if(i%x==0){
			printf("%d\n",i);
		}
	}
}
