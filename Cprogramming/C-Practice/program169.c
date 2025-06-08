#include <stdio.h>
void main(){
        int x;
        printf("Enter SP of Range: ");
	scanf("%d",&x);

	int y;
	printf("Enter EP of Range: ");
	scanf("%d",&y);

        for(int i=x;i<=y;i++){
                float ir;
                if(i<=y){
                        ir=1/i;
                printf("%0.2f\n",ir);
                }
                
        }

}
