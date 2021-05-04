

//Array of products
let products=[
{   photo:`img/pacman.png`,
    name:"Pacman III",
    rate:4.5,
    price:{
        amount:50.00,
        currency:"USD"
    }
        
},

    {photo:`img/theWitcher.png`,
    name:"The Witcher",
    rate:5.0,
    price:{
        amount:200.00,
        currency:"USD"
        }
},

    {photo:`img/hobbit.jpg`,
    name:"Hobbit",
    rate:1.5,
    price:{
        amount:100.00,
        currency:"USD"
        }
},

    {photo:`img/counterStrike.jpg`,
    name:"Counter Strike III",
    rate: 0.5,
    price:{
        amount:55.00,
        currency:"USD"
        }
}
]

let cartArray =[]

// Function that calculates sum and shows the number of selected products
function addToCart(i){
    
    let selected =products[i]
    selected.q=parseInt(prompt(`how many ${products[i].name} do you want `))
    cartArray.push(selected)

    let message=`The product ${products[i].name} was added to cart`
    alert(message)
    
    let sum=0
    for (i=0; i<cartArray.length;i++){
        
        sum+=cartArray[i].q
        cart.innerHTML=``
        cart.innerHTML+=
                `
        <div>${sum}</div>

             `
    }
    
     
   
}



function showProducts(list){
    catalog.innerHTML=``
    for(let i=0; i<list.length; i++){
        catalog.innerHTML+=`
        <div class="product">
        <img class= "pacmanImage" src="${list[i].photo}" alt="">       
        <h2>${list[i].name}</h2>
        <div class="wrapper">
            <div>${list[i].rate}</div>         
            <div>${list[i].price.amount} ${list[i].price.currency}</div>
            <button onclick="addToCart(${i})"> ADD to Cart </button>
        </div>
        </div>`

    }
}

showProducts(products)