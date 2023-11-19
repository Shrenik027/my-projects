#include <stdio.h>
void main(){
        int savings;
        printf("Enter money:    ");
        scanf("%d",&savings);

        if(savings>=2500){
                printf("goa via car");
        }
        else if(savings>=2000){
                printf("mumbai vai bike");
        }
        else if(savings>=1500){
                printf("panvel via bike");
        }
        else if(savings>=1000){
                printf("near home via bike");
        }
        else if(savings>=500){
                printf("home");
        }
        else{
                printf("nowhere");
        }
}
