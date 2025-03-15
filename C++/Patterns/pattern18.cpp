#include <iostream>
using namespace std;

int main(){

	int rows;
	cout << "Rows:" << endl;
	cin >> rows;

	for(int i=1;i<=rows;i++){
		for(int j=1;j<=rows;j++){
			cout << i << " ";
		}
		cout << endl;
	}
}
