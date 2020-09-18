/*
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this question, 
we define empty string as valid palindrome.

Example:
input: 'Was it a car or a cat I saw'
output: true
*/

var isPalindrome = function(s) {
    cleanStr = s.toLowerCase().replace(/[\W_]/g, '');
    for(let i = 0; i < cleanStr.length / 2; i++)
    {
        if (cleanStr[i] != cleanStr[cleanStr.length - 1 - i])
        {
            return false;
        }
    }
    return true;
};