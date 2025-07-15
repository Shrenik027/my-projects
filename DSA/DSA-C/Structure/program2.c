#include <stdio.h>
struct Demo{
        int jerno;
        float avg;
        double grade;
};
void main(){

        struct Demo obj;

        printf("%ld\n",sizeof(obj));
        printf("%ld\n",sizeof(struct Demo));
}
