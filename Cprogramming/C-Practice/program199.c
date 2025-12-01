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

        int Search;
        printf("Enter Search Element:\n");
        scanf("%d",&Search);
        
	int flag=0;
        for(int i=0;i<size;i++){
                if(Search==arr[i]){
			flag=1;
                  }
        }
	if(flag==1){
		printf("Element found\n");
	}else{
		printf("Element Not Found\n");
	}

}
