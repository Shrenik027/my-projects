#include <iostream>
using namespace std;

int main(){

	int num,reverse=0,rem,sum=0;
        cout<<"Enter num:"<<endl;
	cin>>num;

	 while (num != 0) {
           rem = num % 10;
	   sum+=rem;
           reverse = reverse * 10 + rem;
           num /= 10;
         }
	 cout<<sum<<endl;


}
