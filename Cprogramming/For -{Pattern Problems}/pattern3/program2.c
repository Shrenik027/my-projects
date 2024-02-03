#include <stdio.h>
void main(){
        int num;
        printf("Enter No:\n");
        scanf("%d",&num);
        int fact=1;
        for (int i=num;i>0;i--){
                fact=fact*i;
		
        }
	printf("Factorial is: %d\n",fact);
}
