// Greatest Number of the three Entered Numbers.

#include <iostream>
using namespace std;

int main(){
	int num1,num2,num3;
	cout << "Enter 3 Numbers:" << endl;
	cin >> num1 >> num2 >> num3;

	if(num1>num2 && num1>num3)
		cout << num1 << " " << "is Greatest" << endl;
	else if(num2>num1 && num2>num3)
		cout << num2 << " " << "is Greatest" << endl;
	else 
		cout << num3 << " " << "is Greatest" << endl;

}
