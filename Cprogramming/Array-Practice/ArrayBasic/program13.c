#include <stdio.h>

int findUnique(int arr[], int n, int k) {
    int count[32] = {0};
    for (int i = 0; i < n; i++) {
        int num = arr[i];
        int j = 0;
        while (num > 0) {
            if (num & 1) {
                count[j]++;
            }
            num = num >> 1;
            j++;
        }
    }
    int result = 0;
    for (int i = 0; i < 32; i++) {
        if (count[i] % k != 0) {
            result += (1 << i);
        }
    }
    return result;
}

void main() {
    int n, k;
    printf("Enter the size of the array: ");
    scanf("%d", &n);
    printf("Enter the value of k: ");
    scanf("%d", &k);

    int arr[n];
    printf("Enter %d elements:\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    int unique = findUnique(arr, n, k);
    printf("The unique element is: %d\n", unique);


}

