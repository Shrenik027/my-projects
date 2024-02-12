#include <stdio.h>

void main() {
    int n;
    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    int left_sum = 0, right_sum = 0;


    for (int i = 0; i < n / 2; i++) {
        left_sum += arr[i];
    }


    for (int i = n / 2; i < n; i++) {
        right_sum += arr[i];
    }

    int result = left_sum * right_sum;
    printf("Output : %d\n", result);
}

