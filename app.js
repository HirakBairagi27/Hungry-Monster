fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => console.log(data))
// console.log(data);


// const displayMeals = mealName =>{
//     const mealsDiv = document.getElementById('meals');
//     for(let i = 0; i < mealName.length; i++){
//         const element = mealName[i];
//         console.log(element.strMeals)
        
//          const mealsDiv = document.createElement('div');
//          mealsDiv.className = 'meal'
//     }
// }