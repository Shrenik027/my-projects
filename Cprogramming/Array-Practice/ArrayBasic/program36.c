// Find a peak element which is not smaller than its neighbors

#include <stdio.h>

int findPeak(int arr[], int n) {
    if (n == 1)
        return arr[0];
    if (arr[0] >= arr[1])
        return arr[0];
    if (arr[n - 1] >= arr[n - 2])
        return arr[n - 1];

    int left = 1, right = n - 2;

    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] >= arr[mid - 1] && arr[mid] >= arr[mid + 1])
            return arr[mid];
        else if (arr[mid - 1] > arr[mid])
            right = mid - 1;
        else
            left = mid + 1;
    }
    return -1; // peak not found
}

int main() {
    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter the elements of the array: ");
    for (int i = 0; i < n; ++i)
        scanf("%d", &arr[i]);

    printf("Peak element: %d\n", findPeak(arr, n));
    return 0;
}

