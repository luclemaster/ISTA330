/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. 
Twelve is written as, XII, which is simply X + II. 
The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 

There are six instances where subtraction is used:

- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. 
Input is guaranteed to be within the range from 1 to 3999.


Example:
input: "IV"
output: 4
*/

var romanToInteger = function(s) {
    totalNum = 0;
    var conversions = {'I': 1, 'IV' : 4, 'V' : 5, 'IX' : 9, 'X' : 10, 'LX' : 40, 'L': 50, 'XC' : 90,
         'X' :100, 'CD' : 400, 'D': 500, 'CM': 900, 'M' : 1000}
    while(s.length > 0)
    {
        if (s.slice(0,2) in conversions)
        {
            totalNum += conversions[s.slice(0,2)];
            s = s.slice(2, s.length);
        }
        else 
        {
            totalNum += conversions[s[0]];
            s = s.slice(1, s.length);
        }
    }
    return totalNum;
};
console.log(romanToInteger("MCMXCIV"));
