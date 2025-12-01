#include <iostream>
using namespace std;

class Base{

	public:
		int a;
		void display(){
			cout<<"Display of Base"<<endl;
		}
};

class Derived:public Base{

	public:
		void show(){
			cout<<"Show of Derived"<<endl;
		}

};

int main(){

	Derived d;
	d.display();
	d.show();
	d.a=10;
	cout<<d.a<<endl;

}
