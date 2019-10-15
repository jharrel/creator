class World {
    static all = [];
  
    constructor(user, planet, content) {
      this.user = user;
      this.planet = planet;
      this.content = content;
      World.all.push(this);
    }
  
    template() {
      // create html template to add to the innerHTML of the post-lists
      return `
           <div class="card">
               <div class="card-content">
                   <span class="card-title">${this.user.name}</span>
                  <p>Ship:${this.user.ship}</p>
                   <p>Planet:${this.planet}</p>
                   <p>${this.content}</p>
           `
      }
  
    display() {
      // display post details in a card in the post-lists
    document.getElementsByClassName("character-lists")[0].innerHTML += this.template();
}
  
    static renderAll() {
      World.all.forEach(world => world.display())
    }
  }