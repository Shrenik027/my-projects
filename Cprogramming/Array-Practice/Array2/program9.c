#include <stdio.h>
void main(){

	int size1,size2,size3;
	printf("Enter size of Array1 and Array2:\n");
	scanf("%d%d",&size1,&size2);

	int arr1[size1],arr2[size2];
        printf("Enter Array1 Elements\n");
	for(int i=0;i<size1;++i){
		scanf("%d",&arr1[i]);
	}
         
        printf("Enter Array2 Elements\n");
	for(int i=0;i<size2;++i){
		scanf("%d",&arr2[i]);
	}
	size3=size1+size2;
	int arr3[size3];
	for(int i=0;i<size1;i++){
		arr3[i]=arr1[i];
	}

        for(int j=0;j<size2;j++){
                arr3[size1+j]=arr2[j];

        }	

	printf("Merged Array:\n");
	for(int k=0;k<size3;k++){
		printf("%d",arr3[k]);
	}
	printf("\n");


}

