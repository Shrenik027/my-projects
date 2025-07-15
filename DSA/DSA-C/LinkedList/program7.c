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

struct Node* findMiddleNode(struct Node* head) {
        struct Node* slow_ptr = head;
            struct Node* fast_ptr = head;
                
                    while (fast_ptr != NULL && fast_ptr->next != NULL) {
                                slow_ptr = slow_ptr->next;
                                        fast_ptr = fast_ptr->next->next;
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

                                                struct Node* middle_node = findMiddleNode(head);

                                                    printf("Middle Node: %d\n", middle_node->data);
}

                                    }
}
        }
}
                    }
}
}
}