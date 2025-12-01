#include <stdio.h>
void main(){
        int rows;
        printf("Enter No of Rows:\n");
        scanf("%d",&rows);
	int ch;
	
        if(rows==4){
		ch='d';
	}
	else if(rows==3){
                ch='c';
        }
	else  if(rows==2){
                ch='b';
        }
	else   if(rows==1){
                ch='a';

        }

        for(int i=1;i<=rows;i++){
                
                for(int j=rows;j>=i;j--){
			printf("%c ",ch);
                        
                }
		ch--;
		if(ch>96 && ch<123){
			ch=ch-32;
		}
		else if(ch>64 && ch<96){
			ch=ch+32;
		}
	
                printf("\n");
	}
}
