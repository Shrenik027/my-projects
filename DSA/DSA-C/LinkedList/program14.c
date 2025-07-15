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

void deleteKey(struct Node** head_ref, int key) {
        struct Node* current = *head_ref;
            struct Node* prev = NULL;
                struct Node* temp = NULL;

                    while (current != NULL) {
                                if (current->data == key) {
                                                if (prev == NULL) {
                                                                    temp = current;
                                                                                    *head_ref = current->next;
                                                                                                    current = current->next;
                                                                                                                    free(temp);
                                                } else {
                                                                    temp = current;
                                                                                    prev->next = current->next;
                                                                                                    current = current->next;
                                                                                                                    free(temp);
                                                }
                                } else {
                                                prev = current;
                                                            current = current->next;
                                }
                    }
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
            int n, data, key;

                printf("Enter the number of elements: ");
                    scanf("%d", &n);

                        printf("Enter the elements: ");
                            for (int i = 0; i < n; i++) {
                                        scanf("%d", &data);
                                                insertAtEnd(&head, data);
                            }

                                printf("Original Linked List: ");
                                    printList(head);

                                        printf("Enter the key to delete from the linked list: ");
                                            scanf("%d", &key);

                                                deleteKey(&head, key);

                                                    printf("Linked List after deletion of key %d: ", key);
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