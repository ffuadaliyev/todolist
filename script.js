document.querySelector(".add_btn").addEventListener("click", () => {
  var save_box = document.querySelector(".save_box");
  var add_box = document.createElement("div");
  add_box.className = "add_box";
  save_box.append(add_box);
  var inpt = document.createElement("input");
  inpt.type = "text";
  inpt.placeholder = "New item";
  add_box.appendChild(inpt);
  var icon_x = document.createElement("iconify-icon");
  icon_x.icon = "bi:x-circle";
  icon_x.addEventListener("mouseover", () => {
    icon_x.setAttribute("icon", "bi:x-circle-fill");
  });
  icon_x.addEventListener("mouseout", () => {
    icon_x.setAttribute("icon", "bi:x-circle");
  });
  icon_x.addEventListener("click", () => {
    icon_x.parentElement.remove();
  });
  add_box.appendChild(icon_x);
});

document.getElementById("sort_down").addEventListener("click", () => {
  var x = document.querySelectorAll(".add_box input");
  var test = true;
  while (test) {
    test = false;
    for (let i = 0; i < x.length - 1; i++) {
      var a = x[i].value;
      var b = x[i + 1].value;
      if (a.toLowerCase() > b.toLowerCase()) {
        x[i].value = b;
        x[i + 1].value = a;
        test = true;
      }
    }
  }
});
document.getElementById("sort_up").addEventListener("click", () => {
  var x = document.querySelectorAll(".add_box input");
  var test = true;
  while (test) {
    test = false;
    for (let i = 0; i < x.length - 1; i++) {
      var a = x[i].value;
      var b = x[i + 1].value;
      if (a.toLowerCase() < b.toLowerCase()) {
        x[i].value = b;
        x[i + 1].value = a;
        test = true;
      }
    }
  }
});
