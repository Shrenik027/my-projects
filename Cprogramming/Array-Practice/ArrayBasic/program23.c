#include <stdio.h>
void main(){

	int size1;
	printf("Enter size for 1st array.\n");
	scanf("%d",&size1);



	int arr1[size1];

	printf("Enter Array Elements.\n ");

	for(int i=0;i<size1;i++){
		scanf("%d",&arr1[i]);
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

        int ele1=arr1[0],ele2[1]; 

	printf("2 smallest elements are %d and %d.\n",ele1,ele2);


}
