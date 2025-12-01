#include <iostream>
using namespace std;

class Base{
	public:
		Base(){
			cout<<"Default Cons of Base"<<endl;
		}
		Base(int x){
			cout<<"Param const of Base"<<x<<endl;
		}
};

class Derived:public Base{

	public:
		Derived(){
			cout<<"Default Const of Derived "<<endl;
		}

		Derived(int a){
			cout << "Param Const of Derived "<<a<<endl;
		}

		Derived(int x,int a):Base(x){
			cout << "2Param of Derived "<<a<<endl;
		}
};

int main(){

	Derived d(5,10);
}
