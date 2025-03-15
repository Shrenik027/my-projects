#include <stdio.h>

int main() {
    // Define a 3x3 matrix
    int matrix[3][3];
    
    // Input values into the matrix
    printf("Enter the values for a 3x3 matrix:\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("Enter value for matrix[%d][%d]: ", i, j);
            scanf("%d", &matrix[i][j]);
        }
    }
    
    // Print the matrix
    printf("\nThe 3x3 matrix is:\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }

    printf("the element is %p\n",matrix[0]);
    printf("the element is %p:\n",matrix);
    printf("the element is %p:",&matrix);
    
    return 0;
}

