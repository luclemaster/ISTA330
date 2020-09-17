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
        //console.log(s[i])
        if(s[i] == 'N')
        {
            movement[1]++;
        }
        else if(s[i] == 'S')
        {
            movement[1]--;
        }
        else if(s[i] == 'E')
        {
            movement[0]++;
        }
        else if(s[i] == 'W')
        {
            movement[0]--;
        }
        console.log(movement);
        totalMovement.push(movement);
        
        
    }
    for(let i = 0; i < totalMovement.length; i++)
    {
        console.log(totalMovement[i]);
    }
    //console.log(totalMovement);
    for(let i = 0; i < totalMovement.length; i++)
    {
        for(let j = 0; j < totalMovement.length; j++)
        {
            if(i != j && totalMovement[i] == totalMovement[j])
            {
                //console.log(i);
                //console.log(j);
                //console.log(totalMovement[i]);
                //console.log(totalMovement[j]);
                return true;
            }
        }
    }
    return false;
};
console.log(isCrossing("NESSESW"));