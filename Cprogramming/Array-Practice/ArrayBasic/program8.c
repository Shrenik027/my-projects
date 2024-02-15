#include <stdio.h>

void findEvenOccurrences(int arr[], int n) {
    int i, j;
    printf("Elements with even occurrences: ");
    for (i = 0; i < n; i++) {
        int count = 1;
        if (arr[i] != -1) {
            for (j = i + 1; j < n; j++) {
                if (arr[i] == arr[j]) {
                    count++;
                    arr[j] = -1;
                }
            }
            if (count % 2 == 0)
                printf("%d ", arr[i]);
        }
    }
    printf("\n");
}

void main() {
    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    
    int arr[n];
    printf("Enter the elements of the array: ");
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);
    
    findEvenOccurrences(arr, n);
    
}

