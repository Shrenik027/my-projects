#include <stdio.h>
void main(){

	int x=26;
	char ch='Z';
        for( int i=1;i<=4;i++ ){
                

                for( int j=1;j<=4;j++){
			if(j%2!=0){
				printf("%d ",x);
				x--;
			}
			else{
				printf("%c ",ch);
				ch--;
			}
                        
                }
                
                printf("\n");
        }
}
