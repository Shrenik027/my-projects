#include <stdio.h>
void main(){
	int rows;
	printf("Enter Rows:\n");
	scanf("%d",&rows);
        char ch='A';
	
	int num=1;
       
	for(int i=1;i<=rows;i++){
		for(int j=0;j<rows;j++){
                        
			if(num%2==0){
				printf("%c ",ch+32);
			}
	                else{
				printf("%c ",ch);
			}
			ch++;
			num++;
		


		}
		printf("\n");
	}
}
