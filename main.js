var btn_out = document.querySelector("#btn-out");
var menu = document.querySelector("#menu");
var btn_menu = document.querySelector("#btn-menu");
var btn_menu_div = document.querySelector("#btn-menu-div");

btn_out.addEventListener("click", function (e) {
  e.preventDefault();
  var count = 0;
  count += 1;
  for (var i = 0; i <= count; i++) {
    if (count % 2 == 1) {
      menu.classList.add("hidden");
      btn_out.classList.add("hidden");
      btn_menu_div.classList.remove("hidden");
    } else {
      menu.classList.remove("hidden");
    }
  }
});
