#include <stdio.h>
float Percentage(int total,int nofsub){
	
	float per=(total/nofsub);
	return per;
}
void main(){
	int sub;
	printf("NOTE: Max No of Subs Allowed is 10.\n");
	printf("Enter No of Subjects:\n");
	scanf("%d",&sub);
        
	int arr[sub];
	printf("Enter Marks:\n");
	for(int i=0;i<sub;i++){
		scanf("%d",&arr[i]);
        }
	int total=0;
	for(int i=0;i<sub;i++){
                total=total+arr[i];
        }
	printf("Total marks=%d\n",total);
	float per=Percentage(total,sub);
	printf("Percentage=%lf\n",per);

}
