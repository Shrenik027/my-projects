#include <stdio.h>
void main(){
        for( int i=1;i<=3;i++ ){
                int x=1;
		char ch='A';

                for( int j=1;j<=3;j++){
                        printf("%d%c ",x,ch);

                        x++;
			ch++;
                }
                x=1;
                printf("\n");
        }
}
