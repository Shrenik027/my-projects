#include <stdio.h>
void main(){

	int arr[2][3][3];

	printf("Enter Elements:\n");

	for(int plane=0;plane<2;plane++){
		for(int row=0;row<3;row++){
			for(int col=0;col<3;col++){
				scanf("%d",&arr[plane][row][col]);
			}
		}
	}

        
        int sum=0;

        	
	for(int plane=0;plane<2;plane++){
		for(int row=0;row<3;row++){
			for(int col=0;col<3;col++){
				if(row==0){
					sum=sum+arr[plane][row][col];
				}
			}
		}
	}
	
    	printf("%d\n",sum);


}

	



