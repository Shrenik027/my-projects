#include <stdio.h>
void main(){
        int start,end;
	printf("Enter Start and End point of Range:\n");
	scanf("%d%d",&start,&end);

	for(int i=start;i<=end;i++){

		if(i%2==0){
			printf("%d ",i*i*i);
		}
		else{
			printf("%d ",i);
		}
	}
	printf("\n");
}
