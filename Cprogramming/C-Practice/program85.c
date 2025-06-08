 #include <stdio.h>
int add(int,int);
void main(){

	printf("in main\n");
        int ans=add(10,5);

	printf("%d\n",ans);
}

int add(int x,int y){

	int ans=x+y;
	return ans;
}

