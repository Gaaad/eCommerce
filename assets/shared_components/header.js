document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
       <header>
    <nav>
        <div class="logo">Exclusive</div>
        <ul class="nav-links">
            <li><a href="home.html">
                    <h4 style="color: #DB4444;">Home</h4>
                </a></li>
            <li><a href="#">Sign Up</a></li>
        </ul>
        <div class="search-box">
            <ul class="nav-links">
                <li><img src="./assets/images/general/heart.png" onclick="window.location.href='category_products.html?categoryName=Favourite Products'">
                    <div id="fav-counter" class="counter">0</div>
                </li>
                <li><img src="./assets/images/general/shopping-cart.png" onclick="window.location.href='./cart.html'">
                    <div class="counter">1</div>
                </li>
                <li><img src="./assets/images/general/user.png" alt=""></li>
            </ul>
        </div>
    </nav>
</header>
    `;
  document.getElementById("header").innerHTML = headerHTML;

  updateFavCounter();

  // Add event listener for favorite buttons
  document.body.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("favorite-btn")) {
      updateFavCounter();
    }
  });

  function updateFavCounter() {
    const wishlistLength = WishlistModel.loadWhislistProducts("user1").length;

    const favCounter = document.getElementById("fav-counter");

    favCounter.textContent = wishlistLength;
  }
});
