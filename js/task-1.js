
const categoriesList = document.querySelector('#categories');


const categoryItems = categoriesList.querySelectorAll('.item');


console.log(`Кількість категорій: ${categoryItems.length}`);


categoryItems.forEach((item) => {

  const categoryTitle = item.querySelector('h2').textContent;
  

  const categoryItemsCount = item.querySelectorAll('ul > li').length;
  

  console.log(`Категорія: ${categoryTitle}`);
  console.log(`Кількість елементів: ${categoryItemsCount}`);
});
