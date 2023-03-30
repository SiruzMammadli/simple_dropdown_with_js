const head_dropdown = Array.from(document.querySelectorAll(".dropmenu .head"));

for (let i in head_dropdown) {
  if (head_dropdown[i].parentElement.classList.contains("show")) {
    head_dropdown[i].nextElementSibling.style.height =
      head_dropdown[i].nextElementSibling.scrollHeight + "px";
  } else {
    head_dropdown[i].nextElementSibling.style.height = 0;
  }
  head_dropdown[i].addEventListener("click", function () {
    this.parentElement.classList.toggle("show");
    let description_height = this.nextElementSibling.scrollHeight;
    if(this.parentElement.classList.contains('show')){
        this.nextElementSibling.style.height = `${description_height}px`;
    } else {
        this.nextElementSibling.style.height = 0;
    }

    for (let j in head_dropdown) {
      if (
        head_dropdown[j].parentElement.classList.contains("show") &&
        head_dropdown[j] !== this
      ) {
        head_dropdown[j].parentElement.classList.remove("show");
        head_dropdown[j].nextElementSibling.style.height = 0;
      }
    }
  });
}
