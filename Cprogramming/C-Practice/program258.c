#include <stdio.h>
void main(){

	int a,b;
	printf("Enter Rows and Columns:\n");
	scanf("%d%d",&a,&b);

	int arr[a][b];

	printf("Enter Elements:\n");

	for (int row=0;row<a;row++){
		for (int col=0;col<b;col++){
			scanf("%d",&arr[row][col]);
		}
	}

	int sum=0;

	printf("Array is:\n ");

	for (int row=0;row<a;row++){
		for (int col=0;col<b;col++){
	
			printf("%d ",arr[row][col]);

			sum=sum+arr[row][col];
		}
		printf("\n");
	}
	printf("The Sum OF Array Elements Is:%d\n",sum);
}
