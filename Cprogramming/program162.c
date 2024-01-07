
#include <stdio.h>

void main()
{


	char arr[6] = { 'S', 'H', 'R', 'E', '\0' };


	int i = 0;
	while (arr[i]) {
		printf("%c", arr[i++]);
	}
	
}
