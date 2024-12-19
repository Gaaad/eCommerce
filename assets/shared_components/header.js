document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
       <header>
    <nav>
        <div class="logo">Exclusive</div>
        <ul class="nav-links">
            <li><a href="#">
                    <h4 style="color: #DB4444;">Home</h4>
                </a></li>
            <li><a href="#">Sign Up</a></li>
        </ul>
        <div class="search-box">
            <ul class="nav-links">
<<<<<<< HEAD
                <li><img src="./assets/images/general/heart.png" alt="" onclick=""></li>
                <li><img src="./assets/images/general/shopping-cart.png" onclick="window.location.href='./cart.html'"></li>
=======
                <li><img src="./assets/images/general/heart.png" alt="" onclick="">
                    <div class="counter">1</div>
                </li>
                <li><img src="./assets/images/general/shopping-cart.png">
                    <div class="counter">1</div>
                </li>
>>>>>>> 7cb94af148d5a36bd577743ef88b6266c42c756a
                <li><img src="./assets/images/general/user.png" alt=""></li>
            </ul>
        </div>
    </nav>
</header>
    `;
  document.getElementById("header").innerHTML = headerHTML;
});
