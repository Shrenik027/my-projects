#include <stdio.h>
void main(){

	int size1,size2;
	printf("Enter size for 1st array.\n");
	scanf("%d",&size1);
	printf("Enter size for 2st array.\n");
	scanf("%d",&size2);

	int arr1[size1],arr2[size2];

	printf("Enter 1st Array Elements.\n ");

	for(int i=0;i<size1;i++){
		scanf("%d",&arr1[i]);
	}
	printf("Enter 2st Array Elements.\n ");

	for(int i=0;i<size2;i++){
		scanf("%d",&arr2[i]);
	}

         

	//sorting
	

        for(int i=0;i<=size1-1;i++){

                for(int j=0;j<size1-i-1;j++){

                        if(arr1[j]>arr1[j+1]){
                                int temp =arr1[j];
                                arr1[j]=arr1[j+1];
                                arr1[j+1]=temp;
                        }
                }
        }


        for(int i=0;i<=size2-1;i++){

                for(int j=0;j<size2-i-1;j++){

                        if(arr2[j]>arr2[j+1]){
                                int temp =arr2[j];
                                arr2[j]=arr2[j+1];
                                arr2[j+1]=temp;
                        }
                }
        }

	int sum=arr1[size1-1]*arr2[0];

	printf("Sum is :%d.",sum);


}
