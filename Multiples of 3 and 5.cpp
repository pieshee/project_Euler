#include<iostream>
using namespace std;
     void multiples(int num){
int sum = 0;
for(int x =0; x < num; x++)
{
if (x%3 == 0)
{
                  sum =sum+x;
            }
else if(x%5 == 0)
 {
sum = sum +x;
 }
}
cout <<"The sum is" << sum;
}
int main(){
int number = 1000;
multiples(number);
} 
