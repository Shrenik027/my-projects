#include <stdio.h>
void main(){
	int rows;
	printf("Enter Rows:\n");
	scanf("%d",&rows);

	int num=rows*rows;

	for(int i=1;i<=rows;i++){
		for(int j=1;j<=rows;j++){
			if(num%2==0){
				printf("%d ",num*num);

			}
			else{
				printf("%d ",num);
			}
			num--;

		}
		printf("\n");
	}
}
