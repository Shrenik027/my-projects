#include <stdio.h>
void main(){
        int rows;
	printf("Enter No of Rows:\n");
	scanf("%d",&rows);
        
	for (int i=1;i<=rows;i++){
		int x=1;
		for (int j=rows;j>=i;j--){
			printf("%d ",x);
			x++;
		}
		x=1;
		printf("\n");
	}
}
