#include <stdio.h>
#include <stdlib.h>

struct Node {
        int data;
            struct Node* next;
};

void insertAtBeginning(struct Node** head_ref, int new_data) {
        struct Node* new_node = (struct Node*)malloc(sizeof(struct Node));
            new_node->data = new_data;
                new_node->next = (*head_ref);
                    (*head_ref) = new_node;
}

void reverseLinkedList(struct Node** head_ref) {
        struct Node* prev = NULL;
            struct Node* current = *head_ref;
                struct Node* next = NULL;
                    
                        while (current != NULL) {
                                    next = current->next;
                                            current->next = prev;
                                                    prev = current;
                                                            current = next;
                        }
                            
                                *head_ref = prev;
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

                                                reverseLinkedList(&head);

                                                    printf("Reversed Linked List: ");
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