#include <stdio.h>
void main(){
        char ch='a';


        for(int i=1;i<=4;i++){
                for(int j=1;j<=3;j++){
                        if(i%2==0){
                                printf("%c ",ch);
                                ch++;
                        }
                        
                        else{
                                printf("%d ",j);
                        }
			

                }
		ch='a';
                printf("\n");
        }

}
