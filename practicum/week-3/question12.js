/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. 
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. 
Return false otherwise.

Example:
    input: "NESSESW"
    output: false
*/

var isCrossing = function(s) {
    var movement = [0, 0];
    var totalMovement = [[0,0]];
    for (let i = 0; i < s.length; i++)
    {
        if(s[i] == 'N'){movement[1]++;}
        else if(s[i] == 'S'){movement[1]--;}
        else if(s[i] == 'E'){movement[0]++;}
        else if(s[i] == 'W'){movement[0]--;}
        totalMovement.push(Array.from(movement));
    }
    for(let i = 0; i < totalMovement.length; i++)
    {
        for(let j = 0; j < totalMovement.length; j++)
        {
            let equalLists = true;
            for(let x = 0; x < 2; x++)
            {
                if (totalMovement[i][x] != totalMovement[j][x])
                {
                    equalLists = false
                }
            }
            if(i != j && equalLists)
            {
                return true;
            }
        }
    }
    return false;
};