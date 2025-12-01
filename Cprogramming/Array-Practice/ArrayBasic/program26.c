#include <stdio.h>

void rearrange(int arr[], int n) {
    int temp[n]; 
    int pos_index = 0, neg_index = 1;

        for (int i = 0; i < n; i++) {
    
        if (arr[i] > 0) {
            temp[pos_index] = arr[i];
            pos_index += 2;
        }
            else {
            temp[neg_index] = arr[i];
            neg_index += 2;
        }
    }

    
    for (int i = 0; i < n; i++) {
        arr[i] = temp[i];
    }
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

    rearrange(arr, n);

    printf("Array after rearrangement:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

