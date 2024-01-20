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
	int search;
        printf("Enter Element You Want to Find:\n");
	scanf("%d",&search);
	int flag=0;

        for (int i=0;i<size;i++){
                if(search==arr[i]){
                        flag=i;

                }
                
        }
        printf("The Element Is At %dth Index\n",flag);
        
}
