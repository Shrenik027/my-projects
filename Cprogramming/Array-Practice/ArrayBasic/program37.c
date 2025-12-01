#include <stdio.h>

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void rearrange(int arr[], int n) {
    int negIdx = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] < 0) {
            if (i != negIdx)
                swap(&arr[i], &arr[negIdx]);
            negIdx++;
        }
    }
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

    rearrange(arr, n);

    printf("Rearranged array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");


}

