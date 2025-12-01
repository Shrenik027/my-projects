#include <iostream>
using namespace std;

int main(){

	int start,end;

	cout << "Enter Start:" <<endl;
	cin >> start;
	cout << "Enter End:" <<endl;
	cin >> end;

	for(start;start<=end;start++){
		if(start%2!=0){
			cout << start*start << endl;
		}
	}
}
