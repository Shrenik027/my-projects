#include <iostream>
using namespace std;

int main(){
        int num1,num2;
	cout<<"Enter 2 Numbers:"<<endl;
	cin>>num1>>num2;

	while(num2!=0){
		int rem=num1%num2;
		num1=num2;
		num2=rem;

	}
	cout<<"GCD is:"<<num1<<endl;
}
