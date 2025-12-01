#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter the value of n: ";
    cin >> n;

    // Pyramid pattern
    for (int i = 1; i <= n; i++) {
        for (int j = i; j < n; j++) cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++) cout << "*";
        cout << endl;
    }
    
    cout << endl;

    // Inverted pyramid pattern
    for (int i = n; i >= 1; i--) {
        for (int j = n; j > i; j--) cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++) cout << "*";
        cout << endl;
    }

    cout << endl;

    // Diamond pattern
    for (int i = 1; i <= n; i++) {
        for (int j = i; j < n; j++) cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++) cout << "*";
        cout << endl;
    }
    for (int i = n - 1; i >= 1; i--) {
        for (int j = n; j > i; j--) cout << " ";
        for (int j = 1; j <= 2 * i - 1; j++) cout << "*";
        cout << endl;
    }

    cout << endl;

    // Floyd's triangle
    int num = 1;
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) cout << num++ << " ";
        cout << endl;
    }

    cout << endl;

    // Pascal's triangle
    for (int i = 0; i < n; i++) {
        int val = 1;
        for (int j = 0; j < n - i - 1; j++) cout << " ";
        for (int j = 0; j <= i; j++) {
            cout << val << " ";
            val = val * (i - j) / (j + 1);
        }
        cout << endl;
    }

    cout << endl;

    // Half-diamond star pattern
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) cout << "*";
        cout << endl;
    }
    for (int i = n - 1; i >= 1; i--) {
        for (int j = 1; j <= i; j++) cout << "*";
        cout << endl;
    }

    cout << endl;

    // Number triangle pattern
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) cout << j << " ";
        cout << endl;
    }

    return 0;
}

