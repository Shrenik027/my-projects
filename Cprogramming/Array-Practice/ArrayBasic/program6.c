#include <stdio.h> 


int checkRange(int arr[], int N, int A, int B) {
  
    int rangePresent = 1;

 
    for (int i = A; i <= B; i++) {
      
        int found = 0;

     
        for (int j = 0; j < N; j++) {
            if (arr[j] == i) {
                found = 1;
                break;
            }
        }

   
        if (!found) {
            rangePresent = 0;
            break;
        }
    }

 
    return rangePresent;
}


void main() {

    int A, B;
    printf("Enter the range A and B: ");
    scanf("%d %d", &A, &B);


    int N;
    printf("Enter the number of elements in the array: ");
    scanf("%d", &N);


    int arr[N];
    printf("Enter the elements of the array:\n");
    for (int i = 0; i < N; i++) {
        scanf("%d", &arr[i]);
    }


    if (checkRange(arr, N, A, B)) {
        printf("Yes\n");
    } else {
        printf("No\n");
    }

  
}

