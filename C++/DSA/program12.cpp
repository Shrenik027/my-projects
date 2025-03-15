// C++ code for hollow rectangle 
#include <bits/stdc++.h>
using namespace std;

 
void print_rectangle(int n, int m) 
{ 
	int i, j; 
	for (i = 1; i <= n; i++) 
	{ 
		for (j = 1; j <= m; j++) 
		{ 
			if (i == 1 || i == n || 
				j == 1 || j == m)		 
				cout << "*";			 
			else
				cout << " ";
		} 
		cout << endl;
	} 

} 


int main() 
{ 
	int rows, columns;
        cout<<"Enter rows and cols:"<<endl;
        cin>>rows>>columns;      
	print_rectangle(rows, columns); 

} 

