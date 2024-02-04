#include <stdio.h>
void main(){
	int rows;
	printf("Enter Rows:\n");
	scanf("%d",&rows);

	for(int i=1;i<=rows;i++){

		for(int j=rows;j>=i;j--){
			printf("  ");
		 
		}
		for(int k=1;k<=i;k++){
			printf("%d ",k);
		}
		printf("\n");
	}
}
