#include <stdio.h>
void main(){

        int x;
        printf("enter value : ");
        scanf("%d",&x);

        switch(x){

                case 65:
                        printf("value of x = 65\n");
                        break;
               // case 'A':                                //Error---> Duplicate value
                 //       printf("Value of x = A\n");
                   //     break;
                case 66:
                        printf("value of x=66\n");
                        break;
               //case 'B':                              //Error---> Duplicate value
                  //      printf("four");
                    //    break;
                default:
                        printf("wrong input");

        }

}
