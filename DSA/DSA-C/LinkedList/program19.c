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

void deleteNode(struct Node* node_to_delete) {
        if (node_to_delete == NULL || node_to_delete->next == NULL) {
                    printf("Cannot delete the last node or a NULL node\n");
                            return;
        }
            struct Node* temp = node_to_delete->next;
                node_to_delete->data = temp->data;
                    node_to_delete->next = temp->next;
                        free(temp);
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

                                        int position;
                                            printf("Enter the position of the node to delete: ");
                                                scanf("%d", &position);

                                                    // Traverse to the node to delete
                                                        struct Node* temp = head;
                                                            for (int i = 1; i < position && temp != NULL; i++) {
                                                                        temp = temp->next;
                                                            }

                                                                if (temp == NULL || temp->next == NULL) {
                                                                            printf("Invalid position or cannot delete the last node\n");
                                                                } else {
                                                                            deleteNode(temp);
                                                                                    printf("Linked List after deleting the node at position %d: ", position);
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
            }
}
            }
}
}