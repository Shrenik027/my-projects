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

void insertAtEnd(struct Node** head_ref, int new_data) {
    struct Node* new_node = createNode(new_data);
    if (*head_ref == NULL) {
        *head_ref = new_node;
        return;
    }
    struct Node* last_node = *head_ref;
    while (last_node->next != NULL) {
        last_node = last_node->next;
    }
    last_node->next = new_node;
}

struct Node* mergeSortedLists(struct Node* list1, struct Node* list2) {
    if (list1 == NULL) {
        return list2;
    }
    if (list2 == NULL) {
        return list1;
    }

    struct Node* merged_list = NULL;
    if (list1->data <= list2->data) {
        merged_list = list1;
        merged_list->next = mergeSortedLists(list1->next, list2);
    } else {
        merged_list = list2;
        merged_list->next = mergeSortedLists(list1, list2->next);
    }
    return merged_list;
}

void printList(struct Node* head) {
    while (head != NULL) {
        printf("%d ", head->data);
        head = head->next;
    }
    printf("\n");
}

void main() {
    struct Node* list1 = NULL;
    struct Node* list2 = NULL;
    int n1, n2, data;

    printf("Enter the number of elements in the first list: ");
    scanf("%d", &n1);

    printf("Enter the elements of the first list in sorted order: ");
    for (int i = 0; i < n1; i++) {
        scanf("%d", &data);
        insertAtEnd(&list1, data);
    }

    printf("Enter the number of elements in the second list: ");
    scanf("%d", &n2);

    printf("Enter the elements of the second list in sorted order: ");
    for (int i = 0; i < n2; i++) {
        scanf("%d", &data);
        insertAtEnd(&list2, data);
    }

    printf("First List: ");
    printList(list1);
    printf("Second List: ");
    printList(list2);

    struct Node* merged_list = mergeSortedLists(list1, list2);
    printf("Merged List: ");
    printList(merged_list);
}
