#include <stdio.h>
void main(){
        int k=1,rows;
	printf("Enter Rows.\n");
	scanf("%d",&rows);
	for(int i=1;i<=rows;i++){
		for(int j=1;j<=rows;j++){
			printf("%d ",k);
			k+=3;
		}
		printf("\n");
	}
}

