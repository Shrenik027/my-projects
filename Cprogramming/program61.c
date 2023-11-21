#include <stdio.h>
void main(){

        int x;
	printf("Enter Number: ");
	scanf("%d",&x);
        int rem;
        while(x!=0){
                rem= x%10;
		rem=rem*5;
                printf("%d\n",rem);

                x=x/10;

        }
}
