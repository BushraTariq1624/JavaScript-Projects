function post() {
  var username = document.getElementById("username")
  var text = document.getElementById("text")

  var cards = document.getElementById("cards")
  cards.innerHTML += `<div class="card">
  <div class="card-header">
    <p>Your Post<p>
  </div>
  <div class="card-body">
    <h5 class="card-title">${username.value}</h5>
    <p class="card-text">${text.value}</p>
  </div>
</div>`
}