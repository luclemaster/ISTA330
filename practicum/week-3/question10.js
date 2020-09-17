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
    s = s.replace(/[\w_]/g, '');
    s = s.toLowerCase();
    for(let i = 0; i < s.length / 2; i++)
    {
        if (s[i] != s[s.length - 1 - i])
        {
            return false;
        }
    }
    return true;
};