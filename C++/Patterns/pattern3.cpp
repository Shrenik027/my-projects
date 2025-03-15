#include <iostream>

using namespace std;

void print1(int n){
        for(int i=1;i<=n;i++){
                for(int j=1;j<=i;j++){
                        cout << j;

                }
                cout << endl;
        }
}

int main(){
	int n;
	cout << "No of Lines:" << endl;
	cin >> n;
	print1(n);

	
}
