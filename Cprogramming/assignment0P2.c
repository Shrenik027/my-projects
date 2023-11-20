#include <stdio.h>
void main(){
	int x = 9;
	int ans;

	printf("%d\n",x);
	
	ans = ++x + x++ + ++x;

	printf("%d\n",x);
	printf("%d\n",ans);

	int ans1;
	int ans2;
	int ans3;


	printf("%d\n",x);
	
	
	ans1 = ++x + ++x + ++x + ++x;
	printf("%d\n",x);
	printf("%d\n",ans1);

	printf("%d\n",x);

	ans2 = x++ + x++ + ++x + x++ + ++x;
	printf("%d\n",x);
	printf("%d\n",ans2);

	printf("%d\n",x);

	ans3 = x++ + x++ + x++ + x++;
	printf("%d\n",x);
	printf("%d\n",ans3);
}
