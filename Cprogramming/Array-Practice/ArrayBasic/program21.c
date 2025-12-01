#include <stdio.h>

int firstElementOccurringKTimes(int arr[], int N, int K) {
    int frequency[100000] = {0};
    for (int i = 0; i < N; i++) {
        frequency[arr[i]]++;
        if (frequency[arr[i]] == K)
            return arr[i];
    }
    return -1;
}

void main() {
    int N, K;
    printf("Enter the size of the array: ");
    scanf("%d", &N);

    printf("Enter the value of K: ");
    scanf("%d", &K);

    int arr[N];
    printf("Enter the elements of the array:\n");
    for (int i = 0; i < N; i++) {
        scanf("%d", &arr[i]);
    }

    int result = firstElementOccurringKTimes(arr, N, K);

    if (result != -1)
        printf("Output: %d\n", result);
    else
        printf("Output: No such element found\n");
}

