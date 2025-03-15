//Generating Prime Numbers Between any two Numbers

#include <iostream>
using namespace std;

bool isPrime(int num) {
    if (num < 2)
        return false;

 
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}

int main() {
    int start, end;

 
    cout << "Enter the start number: ";
    cin >> start;
    cout << "Enter the end number: ";
    cin >> end;


    cout << "Prime numbers between " << start << " and " << end << " are: ";
    for (int num = start; num <= end; num++) {
        if (isPrime(num)) {
            cout << num << " ";
        }
    }
    cout<<endl;

}

