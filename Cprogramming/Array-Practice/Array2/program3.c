#include <stdio.h>
void main(){

        int size;
        printf("Enter Size of Array:\n");
        scanf("%d",&size);

        int arr[size];

        printf("Enter Array Elements:\n");

        for (int i=0;i<size;i++){
                scanf("%d",&arr[i]);
        }
        int even=0;
        int odd=0;

        for (int i=0;i<size;i++){
                if(arr[i]%2==0){
                        even=even+arr[i];

                }
                if(arr[i]%2!=0){
                        odd=odd+arr[i];
                }
        }
        printf("The sum of Even Numbers is %d.\n",even);
        printf("The sum of Odd Numbers is %d \n",odd);
}
