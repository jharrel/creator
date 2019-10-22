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
      //createData was created by my strong params inside index.js
      let data = createData();
      //data created is fetched from my base URL
      fetch(Api.baseUrl + '/api/worlds', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        //data is then sent into a string and then converted into JS object into a string with JSON.stringify(data)
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          //user is found or created by user.js
          let user = User.findOrCreate(data.user.name, data.user.ship);
          let world = new World(data);
          world.display();
        })
    }
  
  }