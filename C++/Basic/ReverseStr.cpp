#include <bits/stdc++.h>
using namespace std;

string RevStr(string str, int size){
        char x;
	for(int i=0,j=size-1; i<j;i++,j--){

		x= str[i];
		str[i]= str[j];
		str[j]=x;
	}
	return str;

}

int main() {

	

	string str;
	cout << "Enter String:" << endl;
	cin >> str;
	cout << "Entered String: " << str << endl;
        int size = str.size();
        cout << size << endl;
        string output= RevStr(str,size);
        cout << "Reversed String:" << output << endl; 	

}
