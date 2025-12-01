// Minimum Product of k Integers

#include <stdio.h>

int compare(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}

long long int minProduct(int arr[], int n, int k) {
    qsort(arr, n, sizeof(int), compare);
    long long int product = 1;
    for (int i = 0; i < k; i++) {
        product = (product * arr[i]) % 1000000007;
    }
    return product;
}

void main() {
    int N, K;
    printf("Enter the size of the array: ");
    scanf("%d", &N);
    int arr[N];
    printf("Enter the elements of the array: ");
    for (int i = 0; i < N; i++) {
        scanf("%d", &arr[i]);
    }
    printf("Enter the value of K: ");
    scanf("%d", &K);
    printf("Minimum product of %d integers: %lld\n", K, minProduct(arr, N, K));
    
}

