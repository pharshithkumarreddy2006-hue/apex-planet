function showSection(sectionId) {
  document.querySelectorAll("section").forEach((sec) => {
    sec.classList.add("hidden");
    sec.classList.remove("active");
  });
  let section = document.getElementById(sectionId);
  section.classList.remove("hidden");
  section.classList.add("active", "fade");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let message = document.getElementById("message").value.trim();
  if (name && email && mobile && message) {
    alert("Thank you " + name + "! Your message has been sent.");
    this.reset();
  } else {
    alert("Please fill all fields.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  displayProducts(products);
});

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let task = taskInput.value.trim();
  if (task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    loadTasks();
  }
}

function loadTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task;
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
      deleteTask(index);
    };
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

const products = [
  {
    name: "Laptop",
    category: "electronics",
    price: 800,
    rating: 4.5,
    image: "images/laptop.jpg",
  },
  {
    name: "Phone",
    category: "electronics",
    price: 500,
    rating: 4.7,
    image: "images/phone.jpg",
  },
  {
    name: "Headphones",
    category: "electronics",
    price: 120,
    rating: 4.3,
    image: "images/headphones.jpg",
  },
  {
    name: "Smartwatch",
    category: "electronics",
    price: 200,
    rating: 4.4,
    image: "images/smartwatch.jpg",
  },
  {
    name: "Shirt",
    category: "fashion",
    price: 30,
    rating: 4,
    image: "images/shirt.jpg",
  },
  {
    name: "Shoes",
    category: "fashion",
    price: 60,
    rating: 4.2,
    image: "images/shoes.jpg",
  },
  {
    name: "Jacket",
    category: "fashion",
    price: 90,
    rating: 4.6,
    image: "images/jacket.jpg",
  },
  {
    name: "Backpack",
    category: "accessories",
    price: 45,
    rating: 4.1,
    image: "images/backpack.jpg",
  },
  {
    name: "Sunglasses",
    category: "accessories",
    price: 25,
    rating: 4,
    image: "images/sunglasses.jpg",
  },
  {
    name: "Watch",
    category: "accessories",
    price: 150,
    rating: 4.5,
    image: "images/watch.jpg",
  },
];

function displayProducts(list) {
  let productList = document.getElementById("productList");
  productList.innerHTML = "";
  list.forEach((p) => {
    let div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<img src="${p.image}" class="product-img"><h3>${p.name}</h3><p>Category:${p.category}</p><p>Price:$${p.price}</p><p>Rating:${p.rating}</p>`;
    productList.appendChild(div);
  });
}

function filterProducts() {
  let category = document.getElementById("filterCategory").value;
  let filtered =
    category == "all"
      ? products
      : products.filter((p) => p.category == category);
  displayProducts(filtered);
}

function sortProducts() {
  let option = document.getElementById("sortOption").value;
  let sorted = [...products];
  if (option == "priceLow") {
    sorted.sort((a, b) => a.price - b.price);
  }
  if (option == "priceHigh") {
    sorted.sort((a, b) => b.price - a.price);
  }
  if (option == "rating") {
    sorted.sort((a, b) => b.rating - a.rating);
  }
  displayProducts(sorted);
}
