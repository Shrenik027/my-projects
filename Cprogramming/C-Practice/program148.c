#include <stdio.h>

int main()

{

    int out, in;

    int rows = 5;

    int x = 5;

    int y = 5;

    for (out = 1; out <= rows; out++) {

    for (in = 1; in <= rows * 2; in++) {

    if (in == x || in == y) {

        printf("*");

} else {

        printf(" ");

}

}

    x--;

    y++;

printf("\n");

}

}
