#include <stdio.h>

void removeDuplicates(int arr[], int *n) {
    int index = 0;
    for (int i = 0; i < *n; i++) {
        int j;
        for (j = 0; j < index; j++) {
            if (arr[i] == arr[j]) {
                break;
            }
        }
        if (j == index) {
            arr[index] = arr[i];
            index++;
        }
    }
    *n = index;
}

void main() {
    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    removeDuplicates(arr, &n);

    printf("Array after removing duplicates:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
}

