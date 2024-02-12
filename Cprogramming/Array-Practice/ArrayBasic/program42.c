#include <stdio.h>

void countElementsBetween(int arr[], int n, int num1, int num2) {
    int found1 = 0, found2 = 0;
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] == num1)
            found1 = 1;
        else if (arr[i] == num2)
            found2 = 1;
        else if (found1 && !found2)
            count++;
    }

    printf("Output : %d\n", count);
}

void main() {
	int n;
	printf("Enter size.\n");
	scanf("%d",&n);
    int arr[n];

    printf("Enter Array elements\n");
    for(int i=0;i<n;i++){
	    scanf("%d",&arr[i]);
    }
    int num1, num2;
    printf("Enter num1 & num2\n");
    scanf("%d%d",&num1,&num2);

    countElementsBetween(arr, n, num1, num2);
    
}

