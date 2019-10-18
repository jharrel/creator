class Api {
    static baseUrl = 'http://localhost:3000'
  
    static getWorlds() {
      fetch(Api.baseUrl + '/api/worlds')
        .then(resp => resp.json())
        .then(worlds => {
          worlds.forEach(worldData => {
            let user = User.findOrCreate(worldData.user.name, worldData.user.ship);
            worldData.user = user
            let newWorld = new World(worldData);
          })
          World.renderAll();
        })
        .catch(errors => console.log('d', errors))
    }
  
    // static getWorlds() {
    //   fetch(Api.baseUrl + '/api/worlds')
    //     .then(resp => resp.json())
    //     .then(worlds => {
    //       worlds.forEach(world => {
    //         let user = User.findOrCreate(world.user.name, world.user.ship);
    //         let newWorld = new World(user, world.planet, world.content, world.id);
    //       })
    //       World.renderAll();
    //     })
    //     .catch(errors => console.log('d', errors))
    // }

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
          let world = new World(data);
          world.display();
        })
    }
  
  }