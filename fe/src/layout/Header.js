import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
return (
  <>
    <div id="header">
      <div class="header grid__auto">
        <div class="header__navbar-flex-user grid__auto ">
          <ul class="header__navbar-items ">
            <li class="header__navbar-item">
              <a href="login.html">Đăng nhập</a>
            </li>
            <li class="header__navbar-item">
              <a href="register.html">Đăng ký</a>
            </li>
          </ul>
        </div>

        <div class="header-flex-with-search">
          <div class="header__logo">
            <a href="index.html">
              {/* <img src="assets/img/logo.png" alt="logo"> */}
            </a>
          </div>

          <div class="header__search">
            <input class="header__search-input" type="text" placeholder="Tìm kiếm..." />
            <button class="header__search-btn">
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: '15px' }} />
            </button>
          </div>
          <div class="header__cart">
            <a href="cart.html">
              <div class="header__cart-hover">
                <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '20px' }} />
                <div class="header__cart-list header__cart-list-no-cart">
                  <div class="header__cart-text-center">
                    <span>Chưa có sản phẩm</span>
                  </div>
                </div>
                <span class="header__cart-number">0</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default Header;