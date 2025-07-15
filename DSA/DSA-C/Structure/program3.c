#include <stdio.h>
struct Demo{
        float f1;
        char *ch1;
	int x;
	int y;
};
void main(){

        
        printf("%ld\n",sizeof(struct Demo));
}
