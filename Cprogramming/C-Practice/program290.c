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
        int ele;
        printf("Enter Element: \n");
        scanf("%d",&ele);
        int flag;

        for (int i=0;i<size;i++){
                if(ele==arr[i]){
                        flag=1;


                }

        }
        if(flag==1){
                printf("%d is present in array\n",ele);
        }
}
