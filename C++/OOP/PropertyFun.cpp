#include <iostream>
using namespace std;

class Rectangle{
	private:
		int length;
		int breadth;
	public:
	        void setLength(int l){
			if(l<0)
				length=1;
			else
				length=l;
		}	

		void setBreadth(int b){
			if(b<0)
				breadth=1;
			else
				breadth=b;
		}
		int getLength(){
			return length;
		}
		int getBreadth(){
			return breadth;
		}

		int area(){
			return length*breadth;
		}
		int perimeter(){
			return 2*(length+breadth);
		}	
};

int main(){
	 Rectangle r1;
	 r1.setLength(-10);
	 r1.setBreadth(5);
	 cout<<r1.area()<<endl;
	 cout<<r1.getLength()<<endl;
}

