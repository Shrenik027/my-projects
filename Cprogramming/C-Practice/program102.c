#include <stdio.h>
void main(){
	int x=14;
        for( int i=1;i<=4;i++ ){
                

                for( int j=1;j<=4;j++){
                        printf("%d ",x);
                        x++;
                }
                x=14;
		x=x+i;
                printf("\n");
        }
}

