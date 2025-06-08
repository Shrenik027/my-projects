#include <stdio.h>
void main(){

        char x;
        printf("enter character : ");
        scanf("%c",&x);

        switch(x){

                case 'A':
                        printf("one\n");
                        break;
                case 'B':
                        printf("two\n");
                        break;
                case 'C':
                        printf("three\n");
                        break;
                case 'D':
                        printf("four\n");
                        break;
                case 'E':
                        printf("five\n");
                        break;
                default:
                        printf("wrong input\n");

        }

}
