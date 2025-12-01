#include <stdio.h>


int isFibonacci(int n) {
    int a = 0, b = 1;
    while (b < n) {
        int temp = b;
        b = a + b;
        a = temp;
    }
    return (b == n);
}


int countFibonacci(int arr[], int n) {
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (isFibonacci(arr[i]))
            count++;
    }
    return count;
}

void main() {
    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    
    int arr[n];
    printf("Enter the elements of the array: ");
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    int result = countFibonacci(arr, n);
    printf("Output: %d\n", result);

    
}

