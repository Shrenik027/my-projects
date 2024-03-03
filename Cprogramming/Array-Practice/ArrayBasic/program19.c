#include <stdio.h>

void findCommonElements(int ar1[], int ar2[], int ar3[], int n1, int n2, int n3) {
    int i = 0, j = 0, k = 0;

    while (i < n1 && j < n2 && k < n3) {
        if (ar1[i] == ar2[j] && ar2[j] == ar3[k]) {
            printf("%d ", ar1[i]);
            i++;
            j++;
            k++;
        } else if (ar1[i] < ar2[j]) {
            i++;
        } else if (ar2[j] < ar3[k]) {
            j++;
        } else {
            k++;
        }
    }
}

void main() {
    int n1, n2, n3;
    printf("Enter the size of array ar1: ");
    scanf("%d", &n1);
    int ar1[n1];
    printf("Enter the elements of array ar1 : ");
    for (int i = 0; i < n1; i++)
        scanf("%d", &ar1[i]);

    printf("Enter the size of array ar2: ");
    scanf("%d", &n2);
    int ar2[n2];
    printf("Enter the elements of array ar2 : ");
    for (int i = 0; i < n2; i++)
        scanf("%d", &ar2[i]);

    printf("Enter the size of array ar3: ");
    scanf("%d", &n3);
    int ar3[n3];
    printf("Enter the elements of array ar3 : ");
    for (int i = 0; i < n3; i++)
        scanf("%d", &ar3[i]);

    printf("Common elements are: ");
    findCommonElements(ar1, ar2, ar3, n1, n2, n3);
    printf("\n");

}

