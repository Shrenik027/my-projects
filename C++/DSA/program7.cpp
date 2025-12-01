#include <iostream>
using namespace std;

int main(){

	int num,reverse=0,rem;
        cout<<"Enter num:"<<endl;
	cin>>num;

	 while (num != 0) {
           rem = num % 10;
           reverse = reverse * 10 + rem;
           num /= 10;
         }
	 cout<<reverse<<endl;


}
