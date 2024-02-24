#include <stdio.h>
void main() {
    int n;
    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter the elements of the array: ");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    int sum = 0;
    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[j] - arr[i] > 1 || arr[i] - arr[j] > 1) {
                sum += arr[j] - arr[i];
            }
        }
    }

    printf("Sum of f(a[i], a[j]) over all pairs: %d\n", sum);

    
}

