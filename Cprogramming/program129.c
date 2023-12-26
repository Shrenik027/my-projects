#include<stdio.h>

int main()
{
    int n;
    scanf("%d",&n);
    int k = 0;
    for(int i = 0; i < n; i++)
    {
        for(int j = 0; j <= i; j++)
        {
            if((i + j) % 2 == 1)
            {
                printf("%c ",(char)(k + 97));
            }
            else
            {
                printf("%c ",(char)(k + 65));
            }
            k++;
        }
        printf("\n");
    } 
    
}
