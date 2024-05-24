fetch('https://dummyjson.com/recipes')
.then(res =>{
   return res.json();

})
.then((data)=>{
    console.log(data.recipes);
    const newdata= data.recipes;
    let rows="";
newdata.forEach((recipes) => {
    rows +=`<div class="card text-center " style="width: 18rem; 
    background-color: pink;">
    <img src="${recipes.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${recipes.name}</h5>
      
      <p class="card-text">${recipes.ingredients}</p><br>
      <p class="card-text">${recipes.instructions}</p><br>
      <a href="#" class="btn btn-primary p-2  ">price</a>
    </div>
  </div>` 
});
document.getElementById("foodrecipe").innerHTML = rows;

})