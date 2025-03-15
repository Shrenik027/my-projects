#include <iostream>
using namespace std;

int main(){
	int rows;
	cout<<"enter rows:"<<endl;
	cin>>rows;

	for(int i=1;i<=rows;i++){
		for(int j=rows;j>=i;j--){
			cout<<"*";
		}
		cout<<endl;
	}
}

