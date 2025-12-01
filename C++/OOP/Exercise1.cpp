#include <iostream>
using namespace std;

class Student{

	private:
		int Rollno;
		string Name;
		int Mathmarks;
		int Phymarks;
		int Chemmarks;
	
	public:
		Student(int r,string n,int m1,int m2,int m3){
			Rollno=r;
			Name=n;
			Mathmarks=m1;
			Phymarks=m2;
			Chemmarks=m3;
		}

		int Total();
		char Grade();

};

int Student::Total(){

	return Mathmarks+Phymarks+Chemmarks;
}

char Student::Grade(){
	float avg=Total()/3;
	if(avg<=40){
		return 'C';
	}
	else if(avg>40 && avg<=60){
		return 'B';
	}
	else{
		return 'A';
	}
}

int main(){

	int roll,m,p,c;
	string name;
	cout<<"Enter RollNo:";
	cin>>roll;
	cout<<"Enter Name:";
	cin>>name;
	cout<<"Enter Marks of 3 subjects:";
	cin>>m>>p>>c;

	Student s1(roll,name,m,p,c);
        cout<<"Total Marks:"<<s1.Total()<<endl;
	cout<<"Grade:"<<s1.Grade()<<endl;



}
