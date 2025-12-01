#include <stdio.h>
void main(){
	int rows;
	printf("Enter Rows:\n");
	scanf("%d",&rows);
        int ch=96+rows;
	

	for(int i=1;i<=rows;i++){
		for(int j=0;j<=rows;j++){

			printf("%c ",ch);


		}
		ch--;
		printf("\n");
	}
}
