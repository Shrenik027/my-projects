#include <stdio.h>
char* mystrwr(char *str){
        while(*str != '\0'){

                if(*str>=97 && *str<=122){

                        *str=*str-32;
                }
                str++;
        }
        return str;
}
void main(){
        char str[10]={'s','h','r','e','\0'};
        puts(str);
        mystrwr(str);

        puts(str);
}


