#include <stdio.h>
void main(){
	int sp,ep;
	printf("Enter Start Point: ");
	scanf("%d",&sp);

	printf("Enter End Point: ");
	scanf("%d",&ep);


	for(int i=ep;i>=sp;i--){
		if(i%2==0){
			
			printf("%d ",i);
	        }
	}
	printf("\n");
	int j=sp;
	while(j<=ep){
		if(j%2!=0){
		printf("%d ",j);
		}
		j++;
	}
      
}
