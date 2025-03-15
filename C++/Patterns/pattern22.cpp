#include <iostream>
using namespace std;
int main(){

	int n;
	cin>>n;
	int k=1;
	char ch='a';
	for(int i=0;i<n;i++){
		for(int j=0;j<n;j++){
			if(i%2==0){
				cout<<ch<<" ";
				ch++;
			}
			else{


		             	cout<<k<<" ";
			        k++;
			}
		}
		cout << endl;
	}
}
