#include <stdio.h>
void main(){
        int S;
        printf("Enter Start-Point: ");
        scanf("%d",&S);

        int E;
        printf("Enter Emd-Point: ");
        scanf("%d",&E);

        
        while (S<=E){
                if (S%4==0 && E%5==0){
			printf("%d\n",S);
		
		}
                S++;
	}




}
