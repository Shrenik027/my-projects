#include <stdio.h>
void main(){

        char carr[]={'S','h','r','e','n','i','k','3'};

        char *str="Shrenik3";

        printf("%s\n",carr);  //Shrenik3
        printf("%s\n",str);   //Shrenik3

	*str='s';             //Segmentation Fault (Core Dumped)

        printf("%s\n",carr);
        printf("%s\n",str);



}
