(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Header slider
    $('.header-slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Product Slider 4 Column
    $('.product-slider-4').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    
    // Product Slider 3 Column
    $('.product-slider-3').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    
    // Product Detail Slider
    $('.product-slider-single').slick({
        infinite: true,
        autoplay: true,
        dots: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product-slider-single-nav'
    });
    $('.product-slider-single-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.product-slider-single'
    });
    
    
    // Brand Slider
    $('.brand-slider').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: false,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    // Review slider
    $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    // Widget slider
    $('.sidebar-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Quantity
    $('.qty button').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });
    
    
    // Shipping address show hide
    $('.checkout #shipto').change(function () {
        if($(this).is(':checked')) {
            $('.checkout .shipping-address').slideDown();
        } else {
            $('.checkout .shipping-address').slideUp();
        }
    });
    
    
    // Payment methods show hide
    $('.checkout .payment-method .custom-control-input').change(function () {
        if ($(this).prop('checked')) {
            var checkbox_id = $(this).attr('id');
            $('.checkout .payment-method .payment-content').slideUp();
            $('#' + checkbox_id + '-show').slideDown();
        }
    });
})(jQuery);

//START OF NEW CODE

function clamp(min, max, num) { // A clamp number function
    if (num < min) {
        return min;
    } else if (num > max) {
        return max;
    }
    return num;
}

function setCookie(name, expOff, path, data) { // Set cookie function
    if (path === undefined) { // Code for optional parms
        path = "/";
    }
    let exp = new Date(Date.now() + (expOff)).toUTCString(); // Generate the expire String using the milisecond offset provided
    path = `path=${path};`; // Format the path strng
    exp = `expires=${exp};`; // Format the expire string
    document.cookie = `${name}=${data};${exp}${path}`; // Set the cookie
}

function loadCookie(name) { // Load cookie function
    if (name === undefined) { // Code for optional prams
        name = "*";
    }
    let cookie = document.cookie.split(";"); // Split cookie on ";"
    if (name === "*") { // If all cookies wanted return array of all cookies
        return cookie;
    }
    let value = "" // value init
    cookie.forEach(c => { // Loop over each cookie
       let data = c.split("="); // Split cookie on "="
       if (data[0].trim() === name.trim()) { // Check if the cookie name matches the name given
           value = data[1]; // Set value to cookie data
       } 
    });
    return value; // Return value (If done inside of foreach loop will always return undefined)
}

function checkCookie(name, expOff, path, data) { // Check cookie function
    let value = loadCookie(name); // Load the cookie requested
    if (value !== "" && value !== undefined) { // Check if the cookie exists
        return value; // Return existing value
    }
    setCookie(name, expOff, path, data) // Set new cookie if it does not exist
    value = loadCookie(name); // Load the cookie
    return value; // Return the cookie value
}

function loadCart() { // Load / update cart function
    let cart = JSON.parse(checkCookie("cart", 36000*24, "/", JSON.stringify([]))); // Load cart data from cookie then parse the JSON string
    let table = document.querySelector("#cart-table"); // Define html elements
    let subtotal = document.querySelector("#subtotal");
    let shipping = document.querySelector("#shipping");
    let total = document.querySelector("#total");
    let tot = 0; // Define vars
    let sub = 0;
    let ship = 0;
    table.innerHTML = ""; // Set the table HTML to an empty string to clear it.
    cart.forEach(c => { // For each item in the cart
        sub += (c.price*c.quantity); // Add the price to the subtotal
        table.innerHTML += `<tr> <td> <div class="img"> <a href="#"><img src="img/${c.id}.jpg" alt="Image"></a> <p>${c.name}</p></div></td><td>$${c.price}</td><td> <div class="qty"> <button class="btn-minus" onclick="removeOne('${c.id}');"><i class="fa fa-minus"></i></button> <input type="text" disabled value="${c.quantity}"> <button class="btn-plus" onclick="addOne('${c.id}');"><i class="fa fa-plus"></i></button> </div></td><td>$${c.price*c.quantity}</td><td><button onclick="removeFromCart('${c.id}')"><i class="fa fa-trash"></i></button></td></tr>`; // Display it in the table
    });

    ship = sub*0.00; //0% // Caculate shipping
    tot = sub + ship; // Caculate Total
    subtotal.innerHTML = `$${sub}`; // Display subtotal
    shipping.innerHTML = `$${ship}`; // Display Shipping
    total.innerHTML = `$${tot}`; // Display total
}

function loadCartTotal() { // Display cart totals function
    let cart = JSON.parse(checkCookie("cart", 36000*24, "/", JSON.stringify([]))); // Load cart data from cookie
    let subtotal = document.querySelector("#subtotal");  // Define html elements
    let shipping = document.querySelector("#shipping");
    let total = document.querySelector("#total");
    let tot = 0; // Define vars
    let sub = 0;
    let ship = 0;
    cart.forEach(c => { // For each item in the cart
        sub += (c.price*c.quantity); // Add the price to the subtotal
    });

    ship = sub*0.00; //0% // Caculate the shipping
    tot = sub + ship; // Caculate the total
    subtotal.innerHTML = `$${sub}`; // Display subtotal
    shipping.innerHTML = `$${ship}`; // Display shipping
    total.innerHTML = `$${tot}`; // Didsplay total
}

function addOne(name) { // Ddd one function
    let cart = JSON.parse(checkCookie("cart", 36000*24, "/", JSON.stringify([]))); // Load cart data from cookie
    let index = -1;
    for (let i=0; i<cart.length; i++) { // Look for array index from item id
        let c = cart[i];
        if (c.id === name) {
            index = i;
            break;
        }
    }
    if (index !== -1) { // If index was found
        cart[index].quantity += 1; // Add one to the quantity
        cart[index].quantity = clamp(1,127, cart[index].quantity); // Clamp the number
    }
    setCookie("cart", 36000*24, "/", JSON.stringify(cart)); // Update cart data
    loadCart(); // Update page
}

function removeOne(name) { // Remove one function
    let cart = JSON.parse(checkCookie("cart", 36000*24, "/", JSON.stringify([]))); // Load cart data from cookie
    let index = -1;
    for (let i=0; i<cart.length; i++) { // Look for array index from item id
        let c = cart[i];
        if (c.id === name) {
            index = i;
            break;
        }
    }
    if (index !== -1) { // If the index was found
        cart[index].quantity -= 1; // Remove one from the quantity
        cart[index].quantity = clamp(1,127, cart[index].quantity); // Clamp the number
    }
    setCookie("cart", 36000*24, "/", JSON.stringify(cart)); // Update cart data
    loadCart(); // Update page
}

function removeFromCart(name) { // Remove from cart function
    let cart = JSON.parse(checkCookie("cart", 36000*24, "/", JSON.stringify([]))); // Load cart data from cookie
    let index = -1;
    for (let i=0; i<cart.length; i++) { // Look for index from item id
        let c = cart[i];
        if (c.id === name) {
            index = i;
            break;
        }
    }
    if (index !== -1) { // If index was found
        cart.splice(index,1); // Remove item from array
    }
    setCookie("cart", 36000*24, "/", JSON.stringify(cart)); // Update cart data
    loadCart(); // Update page
}

function addToCart(id, price, name) { // Add item to cart function
    let cart = JSON.parse(checkCookie("cart", 36000*24, "/", JSON.stringify([]))); // Load cart data from cookie
    let data = {}; // Create new object
    data.id = id; // Put data oin object
    data.name = name;
    data.price = price;
    data.quantity = 1;

    let flag = true;

    cart.forEach(c => {
        if (c.id === id) flag = false; // Check to see if the item already exists in the cart
    });

    if (flag) { // If it does not exist
        cart.push(data); // Add item
        setCookie("cart", 36000*24, "/", JSON.stringify(cart)); // Update cookie data
        loadCart(); // Update page
    }
}

function addToCartNoUpdate(id, price, name) { // Add item to cart function
    let cart = JSON.parse(checkCookie("cart", 36000*24, "/", JSON.stringify([]))); // Load cart data from cookie
    let data = {}; // Create new object
    data.id = id; // Put data oin object
    data.name = name;
    data.price = price;
    data.quantity = 1;

    let flag = true;

    cart.forEach(c => {
        if (c.id === id) flag = false; // Check to see if the item already exists in the cart
    });

    if (flag) { // If it does not exist
        cart.push(data); // Add item
        setCookie("cart", 36000*24, "/", JSON.stringify(cart)); // Update cookie data
    }
}

// START OF CUPON CODES

function applyCode() {
    /*let box = document.querySelector("#coupon-code");
    let value = box.value;
    let code = JSON.parse(checkCookie("coupon", 36000*24, "/", value))
    if (code === "") {
        setCookie("coupon", 36000*24, "/", value)
        let code = loadCookie("coupon");
    }*/

    //DATABASE OF COUPONS NEEDED
}

// START OF ORDER PLACING

function placeOrder() { // Place order function
    let obj = {} // Create new object
    obj.fName = document.querySelector("#f-name").value; // Add data to object
    obj.lName = document.querySelector("#l-name").value;
    obj.time = document.querySelector("#time").value;
    obj.class = document.querySelector("#class").value;
    obj.cardNum = document.querySelector("#card-num").value;
    obj.cart = JSON.parse(checkCookie("cart", 36000*24, "/", JSON.stringify([]))); // Add cookie data to object
    obj.TYPE = "PLACE";

    const serverURL = "http://172.16.141.6:10000"; // Unless you want to buy a cert or have a self singed cert error use http not https. CHANGE TO HTTPS AS CARD NUMBERS ARE SENT WITH THIS REQUEST. We don't want people stealing card numbers.

    let http = new XMLHttpRequest();
    http.addEventListener("load", reqListner); // Bind the load event to the reqListner function
    http.open("POST", serverURL); // Send a POST request to the server
    http.send(JSON.stringify(obj)); // Format the data as a JSON string and send it over the request.

    function reqListner() { // Listen for the server to send data back
        if (this.status !== 200) { // If the status is not 200 OKAY log error
            console.log("Server Reported Error!");
            console.error(this.responseText);
        }
    }


    //TODO Write Code to connect to back end server. 01-28-2021 WAITING FOR BACKEND!
    //TODO Make backend server to connect to database

}

function readTextFile(file, callback) { // Function to read a text file. Source: https://stackoverflow.com/questions/19706046/how-to-read-an-external-local-json-file-in-javascript
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function loadProductDetails() { // load product details function
    const query = document.location.search; // Get URL prams
    const prams = new URLSearchParams(query); // Organize the prams
    const product = prams.get('product'); // Get the product pram
    let productData = undefined; // Define for later
    const name = document.querySelector("#name"); // Define html elements
    const price = document.querySelector("#price");
    const productImage = document.querySelector("#product-image");
    const addToCartBtn = document.querySelector("#add-to-cart");
    readTextFile("/product-data.json", (text) => { // Read the JSON file for data
        productData = JSON.parse(text); // Parse the data
        try { // Try to change the html
            name.innerHTML = productData[product].name; // Change html data
            price.innerHTML = `$${productData[product].price}`;
            productImage.innerHTML = `<img src="img/${product}.jpg" alt="${productData[product].name}" width="512px" height="512px">`
            addToCartBtn.onclick = () => { // Set onclick event for add to cart button to a new function
                addToCartNoUpdate(product,productData[product].price,productData[product].name); // Add item to the cart
                addToCartBtn.innerHTML = '<i class="fa fa-shopping-cart"></i> Added'; // Change the button html
            }
        } catch (error) { // Catch if an error happened (data is undefined)
            document.location = "/product-list.html"; // Send user to product list page
        }
    });
}

function loadProductList() { // load product list function
    const query = document.location.search; // Get URL prams
    const prams = new URLSearchParams(query); // Organize the prams
    const product = prams.get('search'); // Get the product pram
    let productData = undefined; // Define for later
    const products = document.querySelector("#products");
    readTextFile("/product-data.json", (text) => { // Read the JSON file for data
        productData = JSON.parse(text); // Parse the data
        if (product === null) { // No search
            document.location = "/product-list.html?search="; // Give the user a default search
        } else {
            let productsEntries = Object.entries(productData); // Get the products into an array
            productsEntries.forEach(p => { // Loop over that array
                if (productData[p[0]].name.includes(product)) { // If the product name includes the search term add it to the HTML
                    products.innerHTML += `<div class="col-md-4"> <div class="product-item"> <div class="product-title"> <a href="product-detail.html?product=${p[0]}">${productData[p[0]].name}</a> </div><div class="product-image"> <a href="product-detail.html?product=${p[0]}"> <img src="img/${p[0]}.jpg" alt="${productData[p[0]].name}"> </a> <div class="product-action"> <a href="product-detail.html?product=${p[0]}"><i class="fa fa-cart-plus"></i></a> </div></div><div class="product-price"> <h3><span>$</span>${productData[p[0]].price}</h3> </div></div></div>`;
                }
            });
        }
    });
}

//image slideshow on about page
//NG
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
