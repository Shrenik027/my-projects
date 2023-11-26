#include <stdio.h>
void main(){
        int x=1;
        for (int i=1;i<=3;i++){
                for(int j=3; j>=i;j--){
                        printf("%d ",x*x);
                        x++;
                }
                printf("\n");
        }
}
