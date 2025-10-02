const menuBtn = document.querySelector("#ham-menu");
const rightMenu = document.querySelector("#right-menu");
const removeRightMenuBtn = document.querySelector("#remove-right-menu");
const removeShoppingCartBtn = document.querySelector("#remove-shopping-cart");
const shopCartBtn = document.querySelector("#shop-cart-btn");
const shopCart = document.querySelector("#shop-cart");

const openMenu = () => {
  rightMenu.classList.remove("hidden");
};
const closeMenu = () => {
  rightMenu.classList.add("hidden");
};
const openShoppingCart = () => {
  shopCart.classList.remove("hidden");
};
const removeShoppingCart = () => {
  shopCart.classList.add("hidden");
};
menuBtn.addEventListener("click", openMenu);
removeRightMenuBtn.addEventListener("click", closeMenu);
shopCartBtn.addEventListener("click", openShoppingCart);
removeShoppingCartBtn.addEventListener("click", removeShoppingCart);
