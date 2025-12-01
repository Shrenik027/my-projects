#include <iostream>
using namespace std;

int main(){

	int rows,a;
	cout << "Enter Rows"<< endl;
	cin >> rows;
	a=rows;
		

	for(int i=0;i<rows;i++){
		for(int j=0;j<rows;j++){
			cout << a << "";
		}
		a--;
		cout << endl;
	}
}
