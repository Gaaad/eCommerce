document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
       <header>
    <nav>
        <div class="logo">Exclusive</div>
        <ul class="nav-links">
            <li><a href="#">
                    <h4 style="color: #DB4444;">Home</h4>
                </a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Sign Up</a></li>
        </ul>
        <div class="search-box">
            <ul class="nav-links">
                <li><img src="./assets/images/general/heart.png" alt="" onclick=""></li>
                <li><img src="./assets/images/general/shopping-cart.png"></li>
                <li><img src="./assets/images/general/user.png" alt=""></li>
            </ul>
        </div>
    </nav>
</header>
    `;
  document.getElementById("header").innerHTML = headerHTML;
});
