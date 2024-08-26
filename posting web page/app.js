function post() {
  var username = document.getElementById("username").value
  var text = document.getElementById("text")

  var cards = document.getElementById("cards")
  cards.innerHTML += `<div class="card">
  <div class="card-header">
    <p>${text.value}<p>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
}