var arr = [];

let newPage=(data)=>{
  localStorage.setItem("fasoos_new",JSON.stringify(data));
  window.location.href="../food.html";  
}


let showdessert=(data, location)=>{
  location.innerHTML = ""
  data.forEach(function (el) {
    let { desc, img, name, price, rate, s_desc, bought, cat } = el;
    let div = document.createElement("div");
    div.setAttribute("id", "main_div");
    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("id", "imgdiv01");
    let img1 = document.createElement("img");

    img1.setAttribute("src", img);

    let namediv = document.createElement("div");
    namediv.setAttribute("id", "namediv01");
    let name1 = document.createElement("h3");
    name1.innerHTML = `${name}`;

    let pricediv = document.createElement("div");
    pricediv.setAttribute("id", "pricediv01");
    let priceimg = document.createElement("img");
    if (cat == "veg") {
      priceimg.setAttribute(
        "src",
        "https://www.iamgoingvegan.com/wp-content/uploads/2020/05/Indian-Vegetarian-Mark-1-1024x1024.jpg"
      );
    } else {
      priceimg.setAttribute(
        "src",
        "https://raizethebar.com/media/non-veg-sign_aXi4mRk.png"
      );
    }
    let price1 = document.createElement("h5");

    price1.setAttribute("id", "price01");
    price1.innerHTML = `₹ ${price}`;

    let p_div = document.createElement("div");
    p_div.setAttribute("id", "p_div01");
    let p = document.createElement("p");
    p.innerHTML = `${s_desc}`;
    let br  = document.createElement("br")
    let p1 = document.createElement("div");
    p1.setAttribute("id","readmore")
    p1.innerText = "Read More";

    let buttom = document.createElement("div");
    buttom.setAttribute("id", "buttom01");
    let rate_div = document.createElement("div");
    rate_div.setAttribute("id", "rate_div01");
    let buttonrate = document.createElement("button");
    buttonrate.setAttribute("id", "buttonrate");
    buttonrate.innerHTML = `<i class="fas fa-star fa-customize"></i> ${rate}`;
    let pbought = document.createElement("p");
    pbought.innerHTML = `${bought}`;

    let add_div = document.createElement("div");
    add_div.setAttribute("id", "add_div01");
    let addbtn = document.createElement("button");
    addbtn.setAttribute("id", "addbtn01");
    addbtn.setAttribute("class","addbtn01")
    addbtn.addEventListener("click", ()=>{ 
           arr.push(el)
          localStorage.setItem("cartItems", JSON.stringify(arr));
    //       addbtn.style.backgroundColor="white"
    //       addbtn.innerHTML = `<div class="quantity">
    //     <button id="minus" class="btn minus-btn disabled" type="button">-</button>
    //     <input type="text" id="quantity" value="1">
    //     <button id="plus" class="btn plus-btn" type="button">+</button>
    // </div>`
      })
    addbtn.innerText = "ADD";
    let costa = document.createElement("p");
    costa.innerText = "Customisable";

    imgdiv.append(img1);

    pricediv.append(priceimg, price1);
    namediv.append(name1, pricediv);

    p_div.append(p,br, p1);

    rate_div.append(buttonrate, pbought);
    add_div.append(addbtn, costa);
    buttom.append(rate_div, add_div);

    div.append(imgdiv, namediv, p_div, buttom);
    imgdiv.addEventListener("click",()=>{
      newPage(el);
    });

    location.append(div);
  });
}




let showdessert1=(data, location)=>{
   location.innerHTML = "";
  data.forEach(function (el) {
    let { desc, img, name, price, rate, s_desc, bought, cat } = el;

    let div = document.createElement("div");
    div.setAttribute("id", "main_div");
    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("id", "imgdiv011");
    let img1 = document.createElement("img");

    img1.setAttribute("src", img);

    let namediv = document.createElement("div");
    namediv.setAttribute("id", "namediv011");
    let name1 = document.createElement("h3");
    name1.innerHTML = `${name}`;

    let pricediv = document.createElement("div");
    pricediv.setAttribute("id", "pricediv01");
    let priceimg = document.createElement("img");
    if (cat == "veg") {
      priceimg.setAttribute(
        "src",
        "https://www.iamgoingvegan.com/wp-content/uploads/2020/05/Indian-Vegetarian-Mark-1-1024x1024.jpg"
      );
    } else {
      priceimg.setAttribute(
        "src",
        "https://raizethebar.com/media/non-veg-sign_aXi4mRk.png"
      );
    }
    let price1 = document.createElement("h5");

    price1.setAttribute("id", "price01");
    price1.innerHTML = `₹ ${price}`;

    let p_div = document.createElement("div");
    p_div.setAttribute("id", "p_div01");
    let p = document.createElement("p");
    p.innerHTML = `${s_desc}`;
     let br  = document.createElement("br")
    let p1 = document.createElement("div");
    p1.setAttribute("id", "readmore");
    p1.innerText = "Read More";

    let buttom = document.createElement("div");
    buttom.setAttribute("id", "buttom01");
    let rate_div = document.createElement("div");
    rate_div.setAttribute("id", "rate_div01");
    let buttonrate = document.createElement("button");
    buttonrate.setAttribute("id", "buttonrate");
    buttonrate.innerHTML = `<i class="fas fa-star fa-customize"></i> ${rate}`;
    let pbought = document.createElement("p");
    pbought.innerHTML = `${bought}`;

    let add_div = document.createElement("div");
    add_div.setAttribute("id", "add_div01");
    let addbtn = document.createElement("button");
    addbtn.setAttribute("id", "addbtn01");
    
    addbtn.innerText = "ADD";
    let costa = document.createElement("p");
    costa.innerText = "Customisable";

    imgdiv.append(img1);

    pricediv.append(priceimg, price1);
    namediv.append(name1, pricediv);

    p_div.append(p,br, p1);

    rate_div.append(buttonrate, pbought);
    add_div.append(addbtn, costa);
    buttom.append(rate_div, add_div);

    div.append(imgdiv, namediv, p_div, buttom);
    imgdiv.addEventListener("click", () => {
      newPage(el);
    });

    location.append(div);
  });
}

export { showdessert, showdessert1 } 