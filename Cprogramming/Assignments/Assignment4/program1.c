#include <stdio.h>
void main(){
	int x;
	printf("Enter End Number: ");
	scanf("%d",&x);

	for(int i=1;i<=x;i++){
		if(i%3!=0){
			printf("%d\n",i);
		}
		printf("\n");
	}
}
