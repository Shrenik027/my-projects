#include <stdio.h>
void funarr(int (*ptr[])[]){
        printf("%d\n",***ptr);

}
void main(){
        int arr1[]={10,20,30,40};
        int arr2[]={1,2,3,4};
        int (*ptr[2])[4]={&arr1,&arr2};
        funarr(ptr);

}
