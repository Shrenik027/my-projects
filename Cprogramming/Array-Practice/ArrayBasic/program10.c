#include <stdio.h>


int maxOddSum(int arr[], int n) {
    int maxOdd = 0;
    int foundOdd = 0;

    
    for (int i = 0; i < n; i++) {
        if (arr[i] % 2 != 0 && arr[i] > 0) { 
            foundOdd = 1; 
            maxOdd += arr[i];
        }
    }

    return foundOdd ? maxOdd : -1; 
}
    
    void main() {
    int n;

    printf("Enter the size of the array: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter %d integers:\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    int result = maxOddSum(arr, n);

    printf("Output: %d\n", result);

    
}

