#include <stdio.h>

void findOccurrences(int arr[], int N, int X) {
    int first = -1, last = -1;
    for (int i = 0; i < N; i++) {
        if (arr[i] == X) {
            if (first == -1)
                first = i;
            last = i;
        }
    }
    printf("%d %d\n", first, last);
}

void main() {
    int N, X;
    printf("Enter the size of the array: ");
    scanf("%d", &N);
    printf("Enter the elements of the array in sorted order: ");
    int arr[N];
    for (int i = 0; i < N; i++) {
        scanf("%d", &arr[i]);
    }
    printf("Enter the element to find occurrences for: ");
    scanf("%d", &X);

    findOccurrences(arr, N, X);


}

