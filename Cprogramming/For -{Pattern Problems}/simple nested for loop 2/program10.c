#include <stdio.h>
void main(){


	char ch='F';
        int a=5;
        for( int i=1;i<=6;i++ ){


                for( int j=1;j<=6;j++){
			if(j%2!=0){
				printf("%c ",ch);
				ch=ch-2;
			}
			else{
				printf("%d ",a);
				a=a-2;
			}
                     
                }
                ch='F';
		a=5;
                printf("\n");
        }
}
