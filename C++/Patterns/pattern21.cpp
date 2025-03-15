#include <iostream>
using namespace std;
int main(){

	int n;
	cin>>n;
	for(int i=1;i<=n;i++){
            char ch='A';
            for(int j=n;j>=i;j--){
                cout<<ch<<"";
                ch++;

            }
            cout<<endl;

        }
}
