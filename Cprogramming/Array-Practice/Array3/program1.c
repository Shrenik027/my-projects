#include <stdio.h>
void main(){
	int size;
	printf("Enter Size of Array:\n");
	scanf("%d",&size);

	int arr[size];
	printf("Enter Elements:\n");

	for(int i=0;i<size;i++){
		scanf("%d",&arr[i]);
	}

	int tofind;
	printf("Enter Element:\n");
	scanf("%d",&tofind);

	int flag=0;
	for(int i=0;i<size;i++){
		if(tofind==arr[i]){
			flag=1;
		}
	}
	if(flag==1){

		printf("%d is present.\n",tofind);
	}
	else{
		printf("%d is not present.\n",tofind);
	}
}
