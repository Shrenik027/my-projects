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

void insertSorted(struct Node** head_ref, int new_data) {
        struct Node* newNode = createNode(new_data);
            struct Node* current;

                if (*head_ref == NULL || (*head_ref)->data >= new_data) {
                            newNode->next = *head_ref;
                                    *head_ref = newNode;
                } else {
                            current = *head_ref;
                                    while (current->next != NULL && current->next->data < new_data) {
                                                    current = current->next;
                                    }
                                            newNode->next = current->next;
                                                    current->next = newNode;
                }
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
                                                insertSorted(&head, data);
                            }

                                printf("Sorted Linked List: ");
                                    printList(head);
}

                            }
}
        }
}
                                    }
                }
                }
}
            }
}
}