#include <stdio.h>
void main(){
        int num;
        printf("Enter a number:\n");
        scanf("%d",&num);
        int sum=0,rem;

        while(num !=0){
                rem = num % 10;
                sum = sum+rem;
                num=num/10;

        }
        printf("sum of digits is :%d \n",sum);
}


