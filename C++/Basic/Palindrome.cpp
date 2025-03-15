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

	

	string str1;
	cout << "Enter String:" << endl;
	cin >> str1;
        int size = str1.size();
        cout << "Size: " << size << endl;
        string output= RevStr(str1,size);
	if(output == str1){
		cout << "Entered String is Palindrome" << endl;
	}
       	else{
		cout << "Entered String is not palindrome" << endl;
	}	

}
