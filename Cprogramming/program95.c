#include <stdio.h>
void main(){

	int rows;
	printf("Enter Rows: ");
	scanf("%d",&rows);

	int x=1;
	char ch='a';

	for(int i=1;i<=rows;i++){
		for(int j=1;j<=rows;j++){
			if(i%2!=0){
				printf("%d ",x);
				x++;
			}
			else{
				printf("%c ",ch);
				ch++;
			}
		}
		printf("\n");
	}
}

