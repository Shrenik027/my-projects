#include <stdio.h>

void immediateSmaller(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1])
            printf("%d ", arr[i + 1]);
        else
            printf("-1 ");
    }
    printf("-1\n");
}
void main() {
    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    
    int arr[n];
    printf("Enter the elements of the array: ");
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    printf("Output: ");
    immediateSmaller(arr, n);

    
}

