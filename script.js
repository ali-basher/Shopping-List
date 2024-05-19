
let itemForm = document.querySelector('#item-form');
let h1 = document.querySelector("h1");
let input = document.querySelector("input.form-input");
let btn = document.querySelector(".btn");
let filter_input = document.querySelector("input.form-input-filter");
let li = document.querySelectorAll("li");
let item_list = document.querySelector('#item-list');
let btnClear = document.querySelector('.btn-clear');


btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (input.value.length > 0) {
        let codeHtml = `<li>${input.value}
        <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
        </button>
        </li>`;
        item_list.insertAdjacentHTML("afterbegin", codeHtml);
        input.value = "";
    } else {
        alert("Please enter a valid item");
    }
});

btnClear.addEventListener("click", function () {
    if (window.confirm("All items will be deleted, are you sure?")) {
        item_list.innerHTML = "";
    }
});

item_list.addEventListener("click", function (e) {
    let itemDeleted = e.target.parentElement;
    if (itemDeleted.classList.contains("remove-item")) {
        itemDeleted.parentElement.remove();
    }
});

filter_input.addEventListener("input", function (e) {
    let inputUserFilter = e.target.value.toLowerCase();
    let items = item_list.querySelectorAll("li");

    if (items.length != 0) {
        items.forEach(function (item) {
            let textItems = item.textContent.trim().toLowerCase();

            if (textItems.indexOf(inputUserFilter) != -1) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        });
    }
});

