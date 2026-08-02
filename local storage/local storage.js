let lis = document.querySelectorAll("ul li");
let experiment = document.querySelector(".experiment");

// لو فيه لون متخزن
if (localStorage.getItem("color")) {
  experiment.style.backgroundColor = localStorage.getItem("color");

  lis.forEach((li) => {
    li.classList.remove("active");

    if (li.dataset.color === localStorage.getItem("color")) {
      li.classList.add("active");
    }
  });
}

lis.forEach((li) => {
  li.addEventListener("click", function () {
    // إزالة active
    lis.forEach((li) => li.classList.remove("active"));

    // إضافة active
    this.classList.add("active");

    // تغيير اللون
    experiment.style.backgroundColor = this.dataset.color;

    // حفظ اللون
    localStorage.setItem("color", this.dataset.color);
  });
});