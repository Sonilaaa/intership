fetch('https://dummyjson.com/products')
.then(res => {
    return res.json()
})
.then((data )=>{
    console.log(data.products);
    const newdata=data.products;
  let rows="";

  newdata.forEach((products) => {
    rows +=`<tr><td>${products.id}</td>
    <td>${products.title}</td>
    <td>${products.price}</td>
    <td>${products.description}</td>
    <td>${products.discountPercentage}</td>
    <td>${products.rating}</td>
    <td>${products.brand}</td>
    <td>${products.category}</td>
    <td>      <img style="width: 100px;" height="100px" src=${products.thumbnail}></td>
    <td><img style="width: 100px;" height="100px" src= ${products.images[0]}></td>
     </tr>` 
 });

 document.getElementById("databody").innerHTML = rows;
})


            







  

