#include <stdio.h>

int main()

 {

          int i, j, rows =5;

for (i = rows; i >= 1; i--) {

for (j = i; j < rows; j++) {

printf(" ");

}

for (j = 1; j <= (2 * i - 1); j++) {

if (j == 1 || j == (2 * i - 1))

printf("*");

else

printf(" ");

}

printf("\n");

}



for (i = 2; i <= rows; i++) {

for (j = i; j < rows; j++) {

printf(" ");

}

for (j = 1; j <= (2 * i - 1); j++) {

if (j == 1 || j == (2 * i - 1))

printf("*");

else

printf(" ");

}

printf("\n");

}

}
