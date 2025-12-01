#include <stdio.h>
void main(){

	
	int x=1;
	int a=3;
        for( int i=1;i<=3;i++ ){
               

                for( int j=1;j<=3;j++){
			printf("%d ",x);
			x=x+a;
			
			a=a+2;
                        
                        
                }
                
                printf("\n");
        }
}
