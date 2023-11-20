 #include <stdio.h>
void main(){
	int x;
	char chr;
	float rs;
	double crMoney;

	printf("Enter  Number: \n");
	scanf("%d",&x);

	printf("Enter  Character: \n");
	scanf(" %c",&chr);

	printf("Enter  rs: \n");
	scanf("%f",&rs);

	printf("Enter  crMoney: \n");
	scanf("%le",&crMoney);

	printf("%d\n",x);
	printf(" Size of x is:");
	printf("%ld\n",sizeof (x) );

	printf("%c\n",chr);
	printf(" Size of chr is:");
        printf("%ld\n", sizeof (chr) );

	printf("%f\n",rs);
	printf(" Size of rs is:");
        printf("%ld\n",sizeof (rs) );

	printf("%le\n",crMoney);
	printf(" Size of crMoney is:");
        printf("%ld\n",sizeof (crMoney) );
}
