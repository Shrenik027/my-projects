#include <iostream>

int main() {
    int rows;
    std::cout << "Enter number of rows: ";
    std::cin >> rows;

    char currentChar = 'A';

    for (int i = 1; i <= rows; ++i) {
        for (int j = 1; j <= i; ++j) {
            std::cout << currentChar << " ";
            currentChar = (currentChar == 'Z') ? 'A' : currentChar + 1; // Reset to 'A' if it reaches 'Z'
        }
        std::cout << std::endl;
    }

    return 0;
}
