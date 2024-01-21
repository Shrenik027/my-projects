#include <stdio.h>
void main(){
        int size;
        printf("Enter Size of Array:\n");
        scanf("%d",&size);

        int arr[size];
        printf("Enter Elements of array :\n");

        for(int i=0;i<size;i++){
                scanf("%d",&arr[i]);

        }
         
        int ceven=0;
	int codd=0;
        for(int i=0;i<size;i++){
		if(arr[i]%2==0){
			ceven=ceven+1;
		}
                
	}
	 for(int i=0;i<size;i++){
                if(arr[i]%2!=0){
                        codd=codd+1;
                }

        }
        printf("Even Count is:%d  ",ceven);
        printf("Odd Count is:%d  \n",codd);
        
}
