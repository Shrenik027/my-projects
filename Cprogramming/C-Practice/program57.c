#include <stdio.h>
void main(){
	int Startpoint;
	printf("Enter Start-Point: ");
	scanf("%d",&Startpoint);

	int Endpoint;
	printf("Enter Emd-Point: ");
	scanf("%d",&Endpoint);
                 

        for (int i=Startpoint; i<=Endpoint;i++){
                printf("*\n");
        }

}
