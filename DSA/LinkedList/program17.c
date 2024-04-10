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

struct Node* findMiddle(struct Node* head) {
        if (head == NULL) {
                    return NULL;
        }
            struct Node* slow_ptr = head;
                struct Node* fast_ptr = head;
                    while (fast_ptr != NULL && fast_ptr->next != NULL) {
                                slow_ptr = slow_ptr->next;
                                        fast_ptr = fast_ptr->next->next;
                    }
                        return slow_ptr;
}

void printList(struct Node* head) {
        while (head != NULL) {
                    printf("%d ", head->data);
                            head = head->next;
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
                                                insertAtEnd(&head, data);
                            }

                                printf("Original Linked List: ");
                                    printList(head);

                                        struct Node* middle_node = findMiddle(head);
                                            if (middle_node != NULL) {
                                                        printf("Middle Node: %d\n", middle_node->data);
                                            } else {
                                                        printf("The list is empty.\n");
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
            }
}
            }
}
}