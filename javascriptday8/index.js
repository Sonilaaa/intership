fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>{
                return res.json();
            })
            .then((data)=>{
                console.log(data);
                const newdata=data.jewelery;
                console.log(newdata);
                let rows="";
                newdata.forEach((jewelery) => {
                    rows +=`<tr>
                    <td>${jewelery.id}</td>
                    <td>${jewelery.title}</td>
                    <td>${jewelery.price}</td>
                    <td>${jewelery.description}</td>
                    <td>${jewelery.category}</td>
                    <td><img src=" style="width: 100px;" height="100px" ${jewelery.image}"></td>
                    </tr>`;
                });
                document.getElementById("databody").innerHTML=row;
            
            
            })