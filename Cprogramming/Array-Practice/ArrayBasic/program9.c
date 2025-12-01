// to remove element from given index
#include <stdio.h>
void removeAtIndex(int arr[], int *size, int index) {
    if (index < 0 || index >= *size) {
        printf("Index out of bounds.\n");
        return;
    }

   
    for (int i = index; i < *size - 1; i++) {
        arr[i] = arr[i + 1];
    }

    
    (*size)--;
}


void printArray(int arr[], int size) {
    printf("arr[] = { ");
    for (int i = 0; i < size; i++) {
        printf("%d", arr[i]);
        if (i < size - 1) {
            printf(", ");
        }
    }
    printf(" }\n");
}

void main(){
    int size,index;
    
    printf("Enter the size of the array: ");
    scanf("%d", &size);

    int arr[size];

    
    printf("Enter the elements of the array: ");
    for (int i = 0; i < size; i++) {
        scanf("%d", &arr[i]);
    }

    
    printf("Enter the index to remove: ");
    scanf("%d", &index);

    printf("Input: ");
    printArray(arr, size);

    if (index >= 0 && index < size) {
        removeAtIndex(arr, &size, index);
        printf("Output: ");
        printArray(arr, size);
    } else {
        printf("Index out of bounds.\n");
    }

    
}

