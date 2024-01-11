#include <stdio.h>
void main(){

        /*float package1;
        float package2;
        float package3;
        float package4;
        float package5;*/

	float package[5];

        printf("Enter Packagees:\n");
        scanf("%f",&package[0]);
        scanf("%f",&package[1]);
        scanf("%f",&package[2]);
        scanf("%f",&package[3]);
        scanf("%f",&package[4]);

        printf("Friend 1 Package:%f\n",package[0]);
        printf("Friend 2 Package:%f\n",package[1]);
        printf("Friend 3 Package:%f\n",package[2]);
        printf("Friend 4 Package:%f\n",package[3]);
        printf("Friend 5 Package:%f\n",package[4]);
}
