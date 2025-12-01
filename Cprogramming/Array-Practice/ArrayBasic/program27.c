#include <stdio.h>

int countPairsWithSum(int arr1[], int M, int arr2[], int N, int Sum) {
    int count = 0;
    int i = 0, j = N - 1;

    while (i < M && j >= 0) {
        int pairSum = arr1[i] + arr2[j];
        if (pairSum == Sum) {
            count++;
            i++;
            j--;
        } else if (pairSum < Sum) {
            i++;
        } else {
            j--;
        }
    }

    return count;
}

void main() {
    int M, N, Sum;
    printf("Enter the size of the first array (M): ");
    scanf("%d", &M);

    printf("Enter the size of the second array (N): ");
    scanf("%d", &N);

    printf("Enter the target sum: ");
    scanf("%d", &Sum);

    int arr1[M], arr2[N];
    printf("Enter the elements of the first array:\n");
    for (int i = 0; i < M; i++) {
        scanf("%d", &arr1[i]);
    }

    printf("Enter the elements of the second array:\n");
    for (int i = 0; i < N; i++) {
        scanf("%d", &arr2[i]);
    }

    int result = countPairsWithSum(arr1, M, arr2, N, Sum);

    printf("Output: %d\n", result);
}

