#include <stdio.h>
void main(){
	char ch1='A';
	char ch2='b';
        for( int i=1;i<=4;i++ ){
               

                for( int j=1;j<=4;j++){
			if(j%2!=0){
				printf("%c ",ch1);
				ch1=ch1+2;
			}
			else{
				printf("%c ",ch2);
				ch2=ch2+2;
			}
                }
                
                printf("\n");
        }
}

