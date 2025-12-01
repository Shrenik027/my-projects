#include <iostream>
using namespace std;

int main(){
	int rows,cols,a=1;
	cout<<"Enter Rows and cols:"<< endl;
	cin >> rows >> cols;
        
	for(int i=1;i<=rows;i++){
		for(int j=1;j<=cols;j++){
			cout << a << " " ;
			a++;
		}

		cout << endl;

	}
}
