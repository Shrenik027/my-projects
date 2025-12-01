#include <stdio.h>
void main(){
        int rows;
        printf("Enter No of Rows:\n");
        scanf("%d",&rows);
        char ch='D';
	int a=4;
	int b=a;
        char ch1=ch;
        for(int i=1;i<=rows;i++){
                for(int j=rows;j>=i;j--){
			if(i%2==0){
                       
                        printf("%c ",ch1);
                        ch1--;
			}
			else if(i%2!=0){

				printf("%d ",b);
				b--;
			}

                }

                ch1=ch-1;
                ch--;
		b=a-1;
		a--;

                printf("\n");
        }
}
