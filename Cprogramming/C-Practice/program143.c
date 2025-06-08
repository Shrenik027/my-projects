#include <stdio.h>

int main()

 {

int i, j,k, rows = 5;

           for (int i = 1; i <= rows; i++) {

for (int j = i; j < rows; j++) { 

printf(" ");

}

for (int k = 1; k <= i; k++) { 

printf("*");

}

printf("\n");

}

for (int i = rows; i >= 1; i--) {

for (int j = i; j <= rows; j++) { 

printf(" ");  

}

for (int k = 1; k < i; k++) { 

printf("*");

}

            printf("\n"); 

 }

}

