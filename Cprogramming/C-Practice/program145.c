#include <stdio.h>

int main()

 {

int rows=5 ;

          for (int i = 0; i <= rows - 1; i++) {

for (int j = 0; j < i; j++) {

printf(" ");

}

for (int k = i; k <= rows - 1; k++) {

printf("*"  " "); 

}

printf("\n"); 

}



for (int i = rows - 1; i >= 0; i--) {

for (int j = 0; j < i; j++) {

printf(" ");

}

for (int k = i; k <= rows - 1; k++) {

printf("*"  " "); 

}

printf("\n"); 

}

}
