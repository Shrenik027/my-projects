#include <stdio.h>
void main(){

	int x = 8;
	int ans;

	printf("%d\n",x);

	ans = x++ + ++x;

	printf("%d\n",x);
	printf("%d\n",ans);

	/*use bot pre and post increment internal codes */
	 /*pre increment code which runs internally:
         *
         * pre(x){
         * x=x+1;
         * return x;
         *
         * }
         *
         * */

	 /*post increment code which works internally:
         *
         * post(x){
         * int temp;
         * temp = x;
         * x=x+1;
         * return temp;
          }*/


}

