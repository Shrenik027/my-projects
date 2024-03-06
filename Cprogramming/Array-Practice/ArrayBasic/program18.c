#include <stdio.h>

void subArraySum(int arr[], int n, int sum) {
    for (int i = 0; i < n; i++) {
        int currentSum = arr[i];

        if (currentSum == sum) {
            printf("Sum found at index %d\n", i);
            return;
        } else {
            for (int j = i + 1; j < n; j++) {
                currentSum += arr[j];

                if (currentSum == sum) {
                    printf("Sum found between indexes %d and %d\n", i, j);
                    return;
                }
            }
        }
    }
    printf("No subarray found\n");
}

void main() {
    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter the elements of the array: ");
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);

    int sum;
    printf("Enter the sum to find: ");
    scanf("%d", &sum);

    subArraySum(arr, n, sum);

}

