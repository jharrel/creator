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
                   <br>
                   <button class="delete-world-btn">Remove</button>
              </div>
            </div>
           `
      }

//this.http.delete(this.url+'/'+item.Id, httpOptions) due to you defined the URI of your deletion service is patients/{id}.

      deleteWorld (event) {
        event.preventDefault()
        fetch('http://localhost:3000/api/worlds', {
          method: 'DELETE'
          })
        .then(() => {
          document.getElementById(`${this.id}`)
          World.all = World.all.filter(world =>
            world.id !== this.id)
        })
      }

    display() {
      document.getElementsByClassName("character-lists")[0].innerHTML += this.template();

      // display post details in a card in the post-lists

      let deleteBtn = document.querySelector('button.delete-world-btn')
      deleteBtn.setAttribute('class', 'delete-world-btn')
      deleteBtn.innerText = 'Remove Testing'
      deleteBtn.addEventListener('click', event => this.deleteWorld(event))
    }





    static renderAll() {
          World.all.forEach(world => world.display())
    }

} //End of World Class