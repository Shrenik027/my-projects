#include <stdio.h>
#include <stdlib.h>

int sumOfFunction(int arr[], int n) {
    int sum = 0;
    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (abs(arr[j] - arr[i]) > 1) {
                sum += arr[j] - arr[i];
            }
        }
    }
    return sum;
}

void main() {
    int n;
    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter the elements of the array: ");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    int result = sumOfFunction(arr, n);
    printf("Sum of f(a[i], a[j]) over all pairs in the array: %d\n", result);


}

