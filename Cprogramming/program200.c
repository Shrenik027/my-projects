#include <stdio.h>
void main(){

        int size;
        printf("Enter Size of Array: \n");
        scanf("%d",&size);

        int arr[size];

        printf("Enter Elements:\n");
        for(int i=0;i<size;i++){
                scanf("%d",&arr[i]);

        }

      

        int flag=0;
        for(int i=0;i<size;i++){
                if(arr[i] % 4 ==0 && arr[i] % 5 ==0){
                        flag=1;
                  }
        }
        if(flag==1){
                printf("Element found\n");
        }else{
                printf("Element Not Found\n");
        }

}
