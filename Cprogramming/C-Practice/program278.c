#include <stdio.h>
void main(){

        int size;
        printf("Enter Size of array:\n");
        scanf("%d",&size);

        int arr[size];
        printf("Enter Array Elements:\n");

        for(int i=0;i<size;i++){
                scanf("%d",&arr[i]);
        }

        int even=0;
        int odd=0;

        for (int i=0;i<size;i++){
                if(arr[i]%2==0){
                        even=even+1;
                }
		else{
			odd=odd+1;
		}

        }
        printf("Even Elements in arry are:%d\n",even);
        printf("Odd Elements in arry are:%d\n",odd);
}
