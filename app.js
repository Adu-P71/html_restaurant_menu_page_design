const allFoods = document.querySelector('#all');
const breakfast = document.querySelector('#breakfast');
const lunch = document.querySelector('#lunch');
const shakes = document.querySelector('#shakes');
const section = document.querySelector('.items-container');
let sectionArray =  Array.from(section.children);

// window.addEventListener('DOMContentLoaded',()=>{
  // getfile()
  // .then(orderFood);
  
  // setTimeout(() => {
    
  // }, 1000);
// });
// function orderFood() {
//   const foodItems = document.querySelectorAll('.food-item');
//     foodItems.forEach((foodItem) =>  {
//       foodItem.addEventListener('click',() => {
               
//         const data = {
//           foodId:foodItem.id,
//           foodName:foodItem.querySelector('.food-name').textContent,
//           foodprice:foodItem.querySelector('.food-price').textContent,

//         }
//         const options = {
//           method: 'POST',
//           headers: {
//             'Content-Type':'application/json'
//           },
//           body: JSON.stringify(data)
//         };
//         fetch('/foodapi',options)
//         // .then(res=>res.json()).then(details=>console.log(details))
//           })
//         })
// }

function hoverFood() {
  const foodItems = document.querySelectorAll('.food-item');
  foodItems.forEach((foodItem) =>  {
    foodItem.addEventListener('hover',() => {
      const background = foodItem.querySelector('.food-image');
      background.style.backgroundColor = '#000000b9';
      background.style.zIndex = 10;
      foodItem.querySelector('img').style.zIndex =-10;
    })
  });
}
class DisplayUI {
  createElement(tagname,className) {
    let element = document.createElement(tagname);
    element.className = className;
    return element;
  }
        // <p class="black"> ${food.mealtype}</p>

  createFoodItem(food) {
    const foodItem = UI.createElement('div',`food-item ${food.mealtype} all `);
    foodItem.id = food.id;
    foodItem.innerHTML = `<div  class="food-image">
    <img src=${food.image} alt=${food.name}>

    </div>
    <div class="description">
      <div class="description-header">
        <p class="food-name">${food.name}</p>
        <span class="food-price">$${food.price}</span>
      </div>
      <p class="food-comments">
      ${food.comments}
      </p>
    </div>`
    return foodItem;
  }
}
const UI = new DisplayUI();
async function getfile() {
  let response = await fetch('foodItems.json')
  let data = await response.json();
  addFoodsToDom(data)
  
}

function addFoodsToDom(foods) {
  for (const food of foods) {
    let foodItem = UI.createFoodItem(food);
      section.append(foodItem)
  }

  sectionArray = Array.from(section.children);
  return section
}
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
  btn.addEventListener('click',() => {
    for (const food of sectionArray) {
      food.classList.contains(btn.id)?screen.width <= 1000?
      food.style.display = 'block':food.style.display ='flex':
      food.style.display = 'none';
    }
  })
});
