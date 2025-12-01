#include <stdio.h>

int hasPairWithSum(int arr[], int n, int sum) {
    int i, j;
    for (i = 0; i < n-1; i++) {
        for (j = i+1; j < n; j++) {
            if (arr[i] + arr[j] == sum)
                return 1;
        }
    }
    return 0;
}

void main() {
    int n, x;
    printf("Enter the size of the array: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter the elements of the array: ");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter the target sum: ");
    scanf("%d", &x);

    if (hasPairWithSum(arr, n, x))
        printf("Yes, there exists a pair with the sum %d\n", x);
    else
        printf("No, there doesn't exist a pair with the sum %d\n", x);


}

