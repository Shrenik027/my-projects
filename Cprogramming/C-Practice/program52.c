#include <stdio.h>
void main(){
	int Noofpersons;
	float Ticketprice;
	char R;


	printf("Enter No of Persond: ");
	scanf("%d",&Noofpersons);

	printf("Enter Ticket price: ");
	scanf("%f",&Ticketprice);

	printf("Enter Row: ");
	scanf(" %c",&R);

	printf("No of friends:%d",Noofpersons);
	printf("Ticket Cost:%f",Ticketprice);
	printf("Row you got:%c",R);

}
