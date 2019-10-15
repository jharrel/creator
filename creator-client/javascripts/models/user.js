class User {
    static all = []
  
    constructor(name, ship) {
      this.name = name;
      this.ship = ship;
      User.all.push(this);
    }
  
    worlds() {
      World.all.filter(world => world.user.name === this.name);
    }
  
    static find(name) {
      return User.all.find(user => user.name === name);
    }
  
    static findOrCreate(name, ship) {
      let user = User.find(name);
      if (user) {
        return user
      } else {
        return new User(name, ship);
      }
    }
  }