#include <stdio.h>
void main(){
        char ch='c';
	int a;
	a=3;


        for(int i=1;i<=4;i++){
                for(int j=1;j<=3;j++){
                        if(i%2==0){
                                printf("%c ",ch);
                                ch--;
                        }
                        
                        else{
                                printf("%d ",a);
				a--;
                        }
			

                }
		
		ch='c';
		a=3;
                printf("\n");
        }

}

