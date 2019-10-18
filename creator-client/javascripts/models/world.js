class World {
    static all = [];

    constructor(worldData) {
      this.user = worldData.user;
      this.planet = worldData.planet;
      this.content = worldData.content;
      this.id = worldData.id;
      World.all.push(this);
    }
  
    template() {
      // create html template to add to the innerHTML of the post-lists

      const newCardContent = document.createElement('div')
      newCardContent.className = "card"
      newCardContent.innerHTML = 
      `
      <div id=${this.id} class="card-content">
          <span class="card-title">${this.user.name}</span>
         <p>Ship:${this.user.ship}</p>
          <p>Planet:${this.planet}</p>
          <p>${this.content}</p>
          <br>
          <button class="delete-world-btn">Remove</button>
      </div>
      `

      let deleteBtn = newCardContent.querySelector('button.delete-world-btn')
      deleteBtn.addEventListener('click', event => this.deleteWorld(event))

      return newCardContent
      }

      deleteWorld (event) {
        event.preventDefault()
        fetch(`http://localhost:3000/api/worlds/${this.id}`, {
          method: 'DELETE'
          })
        .then(() => {
          const worldToDelete = document.getElementById(`${this.id}`)
          World.all = World.all.filter(world =>
            world.id !== this.id)
          worldToDelete.remove()
        })
      }

    display() {
      document.getElementsByClassName("character-lists")[0].appendChild(this.template());

      // display post details in a card in the post-lists
      
    }

    static renderAll() {
          World.all.forEach(world => world.display())
    }

} //End of World Class