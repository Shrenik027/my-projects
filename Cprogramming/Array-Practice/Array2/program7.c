#include <stdio.h>
void main(){

        int size;
        printf("Enter Size of Array:\n");
        scanf("%d",&size);

        int arr1[size];

        printf("Enter 1st Array Elements:\n");

        for (int i=0;i<size;i++){
                scanf("%d",&arr1[i]);
        }

        int arr2[size];

        printf("Enter 2st Array Elements:\n");

        for (int i=0;i<size;i++){
                scanf("%d",&arr2[i]);
        }
        
        printf("Common Elements Are:\n");
	for (int i=0;i<size;++i){
		int flag=0;
		for (int j=0;j<size;++j){
			if(arr1[i]==arr2[j]){
                                flag=1;				
			
			}
		}
		if(flag==1){
                                printf("%d\n",arr1[i]);
                        
		}
	}
}
        

        
