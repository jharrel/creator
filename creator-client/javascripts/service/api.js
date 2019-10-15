class Api {
    static baseUrl = 'http://localhost:3000'
  
    static getWorlds() {
      fetch(Api.baseUrl + '/api/worlds')
        .then(resp => resp.json())
        .then(worlds => {
          worlds.forEach(world => {
            let user = User.findOrCreate(world.user.name, world.user.ship);
            let newWorld = new World(user, world.planet, world.content);
          })
          World.renderAll();
        })
        .catch(errors => console.log('d', errors))
    }
  
    static submitWorld(event) {
      event.preventDefault();
      let data = createData();
      fetch(Api.baseUrl + '/api/worlds', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          let user = User.findOrCreate(data.user.name, data.user.ship);
          let world = new World(user, data.planet, data.content);
          world.display();
        })
    }
  
  }