//Prime pr not


#include <iostream>
using namespace std;

int main(){

	
        int num;
	bool isPrime = true;

        cout << "Enter a number: ";
        cin >> num;

        if (num <= 1) {
             isPrime = false;
        } else if (num == 2) {
            isPrime = true; 
        } else if (num % 2 == 0) {
            isPrime = false;
        } else {

            for (int i = 3; i <= num / 2; i += 2) {
                if (num % i == 0) {
                    isPrime = false;
		    break;
                }
            }
        }

    
        if (isPrime)
            cout << num << " is a prime number.\n";
        else
            cout << num << " is not a prime number.\n";


}
