#include <iostream>
using namespace std;

int main(){
        int  rows;
	cout<<"Enter Rows:"<<endl;
	cin>>rows;
	for(int i=0;i<rows;i++){
		for(int j=0;j<rows;j++){
			cout << "* ";
		}
		cout << "\n";
	}
}
