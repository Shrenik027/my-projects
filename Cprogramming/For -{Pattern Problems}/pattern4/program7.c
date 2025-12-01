#include <stdio.h>
void main(){
        int rows;
        printf("Enter Rows:\n");
        scanf("%d",&rows);
        char ch1='A',ch2='a';



        for(int i=1;i<=rows;i++){

                for(int j=rows;j>=i;j--){
                        printf("  ");

                }
                for(int k=1;k<=i;k++){
                        if(i%2!=0){
                                printf("%c ",ch1);
                                ch1+=2;
                        }
                        else{
                                printf("%c ",ch2);
                               
                        }
                }
		
                
               
                printf("\n");
        }
}
