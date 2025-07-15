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

void rotateList(struct Node** head_ref, int k) {
        if (*head_ref == NULL || k == 0) {
                    return;
        }

            // Calculate the length of the linked list
                int length = 0;
                    struct Node* temp = *head_ref;
                        while (temp != NULL) {
                                    length++;
                                            temp = temp->next;
                        }

                            // Normalize k
                                k = k % length;
                                    if (k == 0) {
                                                return;
                                    }

                                        // Find the (k-1)th node from the end
                                            struct Node* slow_ptr = *head_ref;
                                                struct Node* fast_ptr = *head_ref;
                                                    for (int i = 0; i < k; i++) {
                                                                fast_ptr = fast_ptr->next;
                                                    }
                                                        while (fast_ptr->next != NULL) {
                                                                    slow_ptr = slow_ptr->next;
                                                                            fast_ptr = fast_ptr->next;
                                                        }

                                                            // Rotate the linked list
                                                                fast_ptr->next = *head_ref;
                                                                    *head_ref = slow_ptr->next;
                                                                        slow_ptr->next = NULL;
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
            int n, data, k;

                printf("Enter the number of elements: ");
                    scanf("%d", &n);

                        printf("Enter the elements: ");
                            for (int i = 0; i < n; i++) {
                                        scanf("%d", &data);
                                                insertAtEnd(&head, data);
                            }

                                printf("Original Linked List: ");
                                    printList(head);

                                        printf("Enter the number of positions to rotate the list to the right: ");
                                            scanf("%d", &k);

                                                rotateList(&head, k);

                                                    printf("Linked List after rotating by %d positions to the right: ", k);
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