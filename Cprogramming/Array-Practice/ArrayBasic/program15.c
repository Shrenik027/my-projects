#include <stdio.h>

void sumOfDistinct(int arr[], int n) {
    int sum = 0;

    for (int i = 0; i < n; i++) {
        int isDistinct = 1;

        for (int j = 0; j < i; j++) {
            if (arr[i] == arr[j]) {
                isDistinct = 0;
                break;
            }
        }

        if (isDistinct) {
            sum += arr[i];
        }
    }

    printf("Sum of distinct elements: %d\n", sum);
}

void main() {
    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter the elements of the array:\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    sumOfDistinct(arr, n);
}

