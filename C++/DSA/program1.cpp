//to check if number entered is positive negative or zero.

#include <iostream>
using namespace std;

int main(){
	int num;
	cout << "Enter a Number:" << endl;
	cin >> num;

	if(num > 0)
		cout << num << " " << "is positive" << endl;
	else if(num < 0)
		cout << num << " " << "is Negative" << endl;
	else
		cout << num << " " << "is zero" << endl;
}
