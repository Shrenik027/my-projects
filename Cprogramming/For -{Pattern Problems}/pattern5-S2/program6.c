#include <stdio.h>
void main(){

	int rows,num=1;
	printf("Enter Rows:\n");
	scanf("%d",&rows);

	for(int i=1;i<=rows;i++){
		for(int j=1;j<=rows;j++){
			printf("%d ",num);
			num++;
		}
		num-=2;
		printf("\n");
	}
}
