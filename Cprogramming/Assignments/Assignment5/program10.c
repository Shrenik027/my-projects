#include <stdio.h>

int main() {
    

   
    for (int i = 1; i < 5; i++) {
	    char ch='D';
        
        for (int j = 4; j >=1; j--) {
            
            printf("%c%d ", ch,j);
	    ch--;
        }
        printf("\n");
    }

    
}

