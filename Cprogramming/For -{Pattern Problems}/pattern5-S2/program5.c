#include <stdio.h>
void main(){
	int rows;
	printf("Enter Rows:\n");
	scanf("%d",&rows);
        char ch='A';
	char ch1='a';
	
       
	for(int i=1;i<=rows;i++){
		for(int j=0;j<rows;j++){
                        
			if(j%2==0){
				printf("%c ",ch1);
			}
	                else{
				printf("%c ",ch);
			}
			ch++;
			ch1++;
		


		}
		printf("\n");
	}
}
