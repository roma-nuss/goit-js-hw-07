const categories = document.querySelectorAll("#categories .item");
console.log("Кількість категорій:", categories.length);

categories.forEach((category) => {
  const categoryTitle = category.querySelector(".title").textContent;
  const itemCount = category.querySelectorAll(".menu-item .list").length;
  console.log(`Категорія: ${categoryTitle}, Кількість елементів: ${itemCount}`);
});
