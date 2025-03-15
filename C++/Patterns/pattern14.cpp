#include <iostream>
using namespace std;

int main(){
        int start,end;
	cout << "Start:" << endl;
	cin >> start;
	cout << "End:" << endl;
	cin >> end;

	for(start;start<=end;start++){
		if(start%3==0 && start%7==0){
			cout << start << endl;
		}
	}
}
