#include <stdio.h>
void main(){
	int x=15;
	int y=78;
	int ans;

	ans = x<<4;
	printf("%d\n",ans);

	ans=y>>5;
	printf("%d\n",ans);

	ans=x--<<2;
	printf("%d\n",ans);
	printf("%d\n",x);

	ans=--y>>4;
	printf("%d\n",ans);
	printf("%d\n",y);
}
