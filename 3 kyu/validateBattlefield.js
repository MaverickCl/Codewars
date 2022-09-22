function validateBattlefield(field) {
    let barcos = {};
    let largo = 0; 
    let direction; 
    let invalid = false; 
    function dfs(i, j, field, dir)
    {
      if (i < 0 || j < 0 || i >= field.length || j >= field[0].length || field[i][j] != '1')
        return;
      if (dir != direction)
        invalid = true;
      largo += 1;
      field[i][j] = 2; // visited
      dfs(i-1, j, field, 'u');
      dfs(i+1, j, field, 'd');
      dfs(i, j-1, field, 'l');
      dfs(i, j+1, field, 'r');
      dfs(i-1, j-1, field, 'ul'); 
      dfs(i-1, j+1, field, 'ur'); 
      dfs(i+1, j-1, field, 'dl'); 
      dfs(i+1, j+1, field, 'dr');
    }
    for (let i = 0; i < field.length; i++)
    {
      for (let j = 0; j < field[0].length; j++)
      {
        if (field[i][j] == 1)
        {
          direction = field[i][j+1] == 1 ? 'r' : 'd';
          dfs(i, j, field, direction);
          if (invalid == true)
            return false;
        }
        if (largo > 0)
        {
          if (!(largo in barcos))
            barcos[largo] = 0;
          barcos[largo] += 1;
        }
        largo = 0;
      }
    }
    for (let i = 1; i <= 4; i++)
    {
      let k = i.toString();
      if (!(k in barcos) || barcos[k] != 4 - i + 1)
        return false;
      delete barcos[k];
    }
    for (let k in barcos) 
      return false;
    return true;
}
module.exports = validateBattlefield;