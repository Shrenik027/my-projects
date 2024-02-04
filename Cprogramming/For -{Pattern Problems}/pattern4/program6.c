#include <stdio.h>
void main(){
        int rows;
        printf("Enter Rows:\n");
        scanf("%d",&rows);
	int a=rows,b=rows;



        for(int i=1;i<=rows;i++){

                for(int j=rows;j>=i;j--){
                        printf("  ");

                }
                for(int k=1;k<=i;k++){
                        if(i%2!=0){
				printf("%d ",a);
				a--;
			}
			else{
				printf("%d ",b);
				b++;
			}
                }
		a=rows;
		b=rows;
                printf("\n");
        }
}
