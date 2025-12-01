#include <stdio.h>
void main(){
	char ch;
	printf("Enter Character: ");
	scanf("%c",&ch);

	int rows;
	printf(" Enter Rows: ");
	scanf("%d",&rows);

	for (int i=1;i<=rows;i++){
		for(int j=1;j<=rows;j++){
			printf("%c ",ch);
			ch--;
		}
		printf("\n");
		
	}

}

