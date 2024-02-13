#include <stdio.h>


int findUniqueElement(int arr[], int n, int k) {
    int uniqueSum = 0;
    for (int i = 0; i < n; i++) {
        uniqueSum += arr[i] % k;
    }

    return uniqueSum % k;
}

void main() {
    int n, k;


    printf("Enter the size of the array: ");
    scanf("%d", &n);
    printf("Enter the value of k: ");
    scanf("%d", &k);

    int arr[n];


    printf("Enter the elements of the array:\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }


    printf("Unique element: %d\n", findUniqueElement(arr, n, k));


}

