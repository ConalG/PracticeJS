const team = {
    _players : [
      {
        firstName: `Harry`,
        lastName: `Kane`,
        age: 28,
      },
      {
        firstName: `Lucas`,
        lastName: `Moura`,
        age: 29,
      },
      {
        firstName: `Son`,
        lastName: `Heung-min`,
        age: 29,
      }
    ],
    
    _games : [
        {
            opponent: `Man City`,
            teamScoce: 1,
            opponentScore: 0,
        },
        {
            opponent: `Wolves`,
            teamScoce: 2,
            opponentScore: 0,
        },
        {
            opponent: `Watford`,
            teamScoce: 3,
            opponentScore: 0,
        }
    ],
  
    get players(){
        return this._players;
    },

    get games(){
        return this._games;
    },

    addPlayer(firstName, lastName, age){
        let newPlayer = {
            firstName,
            lastName,
            age,
        };

        return this._players.push(newPlayer);
    },

    addGame(opponent, teamScoce, opponentScore){
        let newGame = {
            opponent,
            teamScoce,
            opponentScore,
        };

        return this._games.push(newGame);
    }

    
  };

  team.addPlayer(`Dele`, `Alli`, 25);
  team.addPlayer(`Bryan`, `Gil`, 20);
  team.addPlayer(`Cristian`, `Romero`, 23);

  team.addGame(`Crystal Palace`, 0 , 3);
  team.addGame(`Chelsea`, 0 , 3);
  team.addGame(`Arsenal`, 1 , 3);

  console.log(team._players);
  console.log(team._games);

