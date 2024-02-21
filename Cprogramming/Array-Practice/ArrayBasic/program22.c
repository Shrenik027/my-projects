//Exceptionally Odd
#include <stdio.h>

void main() {
    int arr[100], n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    
    printf("Enter the elements of the array:\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    int res = 0;
    for (int i = 0; i < n; i++) {
        res ^= arr[i];
    }
    
    printf("The exceptional number is: %d\n", res);
}

