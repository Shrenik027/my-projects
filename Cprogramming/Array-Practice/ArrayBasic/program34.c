//Print an array in Pendulum Arrangement

#include <stdio.h>
#include <stdlib.h>

// Function to swap two integers
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}


void pendulumArrangement(int arr[], int n) {
    // Sort the array
    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                swap(&arr[i], &arr[j]);
            }
        }
    }


    int* pendulumArr = (int*)malloc(n * sizeof(int));
    int mid = (n - 1) / 2;
    pendulumArr[mid] = arr[0];
    int left = mid - 1;
    int right = mid + 1;


    for (int i = 1; i < n; i++) {
        if (i % 2 == 1) {
            pendulumArr[right++] = arr[i];
        } else {
            pendulumArr[left--] = arr[i];
        }
    }


    printf("Output:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", pendulumArr[i]);
    }

 
    free(pendulumArr);
}

void main() {
    int n;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    
    int arr[n];
    printf("Enter the elements of the array: ");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }


    pendulumArrangement(arr, n);


}

