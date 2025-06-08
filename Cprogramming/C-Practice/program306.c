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

        printf("Uncommon Elements Are:\n");
        for (int i=0;i<size;++i){
                int flag=1;
                for (int j=0;j<size;++j){
                        if(arr1[i]==arr2[j] || arr2[i]==arr1[j]){
                                flag=0;

                        }
			
                }
                if(flag==1){
                                printf("%d\n",arr1[i]);

                }
        }
}

