#include <stdio.h>
int printdiag (int (*ptr)[],int arrsize){
	int diag=0;
	
	for(int i=0;i<arrsize;){
		   diag=diag+*(*ptr+i);
		   i=i+4;
		
		
	}
	return diag;
}
void main(){
        int arr[3][3]={10,20,30,40,50,60,70,80,90};
	int size=sizeof(arr)/sizeof(int);
	int diag=printdiag(arr,size);
	printf("%d\n",diag);
}
