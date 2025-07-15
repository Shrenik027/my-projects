#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* createNode(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation failed\n");
        exit(1);
    }
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

void insertAtBeginning(struct Node** head_ref, int new_data) {
    struct Node* new_node = createNode(new_data);
    new_node->next = *head_ref;
    *head_ref = new_node;
}

struct Node* findNthFromEnd(struct Node* head, int n) {
    if (head == NULL || n <= 0) {
        printf("Invalid input\n");
        exit(1);
    }

    struct Node* slow_ptr = head;
    struct Node* fast_ptr = head;

    for (int i = 0; i < n; i++) {
        if (fast_ptr == NULL) {
            printf("Invalid input: List length is less than %d\n", n);
            exit(1);
        }
        fast_ptr = fast_ptr->next;
    }

    while (fast_ptr != NULL) {
        slow_ptr = slow_ptr->next;
        fast_ptr = fast_ptr->next;
    }

    return slow_ptr;
}

void printList(struct Node* node) {
    while (node != NULL) {
        printf("%d ", node->data);
        node = node->next;
    }
    printf("\n");
}

void main() {
    struct Node* head = NULL;
    int n, data;

    printf("Enter the number of elements: ");
    scanf("%d", &n);

    printf("Enter the elements: ");
    for (int i = 0; i < n; i++) {
        scanf("%d", &data);
        insertAtBeginning(&head, data);
    }

    printf("Original Linked List: ");
    printList(head);

    int position;
    printf("Enter the position of the node from the end to find: ");
    scanf("%d", &position);

    struct Node* nth_node = findNthFromEnd(head, position);
    printf("The node at position %d from the end is: %d\n", position, nth_node->data);
}
