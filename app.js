document.getElementById('confirm-button').addEventListener('click',()=>{
    const selectFood =document.getElementById('input-data').value;
    displayAllFoodData(selectFood);   
})
const displayAllFoodData = name =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
    .then(res => res.json())
    .then (data => displayFoods(data.meals))
    }
    const displayFoods = hungryFoods => {
    const foodsItem = document.getElementById("foods");
    hungryFoods.forEach(hungryFood => {
        const foodDiv = document.createElement('div');
        foodDiv.className ="hungryFood";
        const foodInfo = `<div onclick="displayHungryFoodsDetails('${hungryFood.strMeal}')"><img src = "${hungryFood.strMealThumb}">
        <h4>${hungryFood.strMeal}</h4>
             </div>
             `;
        foodDiv.innerHTML = foodInfo;
        foodsItem.appendChild(foodDiv);
        });         
    } 
    const displayHungryFoodsDetails = foodList =>{
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodList}`;
        fetch(url)
        .then(res => res.json())
        .then (data => renderFoodInfo(data.meals[0]))
      
    }
    
    const renderFoodInfo = allFood =>{
       console.log(allFood)
        const allFoodDetail = document.getElementById("all-hungry-Details");
        const allFoodDetailDiv = document.createElement('div');
      allFoodDetailDiv.className = 'food-attribute';
        const ListOfFood =`
         <img src = "${allFood.strMealThumb}">     
        <h4> Ingredient </h4>
        <p>* ${allFood.strIngredient1}.</p>
        <p>* ${allFood.strIngredient2}.</p>
        <p>* ${allFood.strIngredient3}.</p>
        <p>* ${allFood.strIngredient4}.</p>
        <p>* ${allFood.strIngredient5}.</p>
        <p>* ${allFood.strIngredient6}.</p>
         
     `
        allFoodDetailDiv.innerHTML = ListOfFood;
        allFoodDetail.appendChild(allFoodDetailDiv);
    
    }
    