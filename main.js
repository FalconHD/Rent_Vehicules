const persontage = [
    { per: 14, name: "essence" },
    { per: 21, name: "diesel" },
    { per: 5, name: "electrique" },
    { per: 9, name: "hybride" }
]

const prices = [
    { price: 10, name: "moto" },
    { price: 12, name: "citadin" },
    { price: 14, name: "compact" },
    { price: 20, name: "berlin" },
    { price: 16, name: "utilitaire" },
    { price: 900, name: "chantier" },
    { price: 250, name: "camion" }
]





var manV = ["compact", "citadin", "utilitaire", "chantier"]
var AutoV = ["berlin", "camion"]

var diesel = ["compact", "citadin", "utilitaire", "chantier", "camion", "berlin"]

var essence = ["compact", "citadin", "berlin", "chantier", "moto"];
var hybride = ["berlin", "compact", "citadin"]
var electrique = ["citadin", "moto"]
const fuel = [essence, diesel, electrique, hybride]
const fuelText = ["essence", "diesel", "electrique", "hybride"]

var customerChoises = {
    type: "",
    Vname: "",
    fuelType: "",
    vehicle_price: 0,
    price_toPay: 0
}





// get the first round choise : 


var choises = document.querySelector('.first-round');
var previous = document.querySelector('#prev')
var submit = document.querySelector('#submit')
const progress = document.querySelector('#progress');
const circles = document.querySelectorAll('.circle');


let currentActive = 1;




function RoundTow(name) {
    
        currentActive++;

        // keep it withing boundaries
        if (currentActive > circles.length) {
            currentActive = circles.length;
        }

        update();
       
        customerChoises.type = name
        customerChoises.Vname= name
        var newChoises = choises.querySelectorAll(".choiseContainer");
        newChoises.forEach(elm => {
            elm.remove();
        })

        if (AutoV.includes(customerChoises.Vname)) {
            customerChoises.type = "automatic"
        } else if (manV.includes(customerChoises.Vname)) {
            customerChoises.type = "manual"
        }
    

    fuel.forEach(f => {
        console.log(f.includes(name));
        const found = f.includes(name)
        if (found) {

            let button = document.createElement("button")
            let container = document.createElement("div")
            let img = document.createElement("img")
            container.setAttribute("class", "choiseContainer")
            img.setAttribute("src", `img/${fuelText[fuel.indexOf(f)]}.png`)
            img.setAttribute("alt", fuelText[fuel.indexOf(f)])
            button.innerHTML = fuelText[fuel.indexOf(f)]
            button.setAttribute('name', fuelText[fuel.indexOf(f)])
            button.setAttribute('onclick', 'RoundThree(name)')
            button.setAttribute('class', "ch")
            button.classList.add("btn")
            container.appendChild(img)
            container.appendChild(button)
            choises.appendChild(container)

        }
    })
}

function RoundThree(name) {
    currentActive++;

    // keep it withing boundaries
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    customerChoises.fuelType = name
    console.log(customerChoises);
    update();   
    var newChoises = choises.querySelectorAll(".choiseContainer");
    newChoises.forEach(elm => {
        elm.remove();
    })
    
    


    //creating Page finall

    let part1 = document.createElement("section")
    let part2 = document.createElement("section")
    let container = document.createElement("div")
    let ul = document.createElement("ul")
    let inputDays = document.createElement("input")
    inputDays.setAttribute("type", "text")
    inputDays.setAttribute("id", "days")
    inputDays.setAttribute("placeholder" , "How Many Days ?")
    inputDays.setAttribute("onfocus", "createlister()")
    part1.setAttribute("class", "getDay")
    //
    getFinalResult(name)
    let li = document.createElement("li")
        li.innerHTML = `vehicule Name : ${customerChoises.Vname}`
        ul.appendChild(li)
        li = document.createElement("li")
        li.innerHTML = `Fuel Using : ${customerChoises.fuelType}`
        ul.appendChild(li)
        li = document.createElement("li")
        li.innerHTML = `vehicule Type: ${customerChoises.type}`
        ul.appendChild(li)
        li = document.createElement("li")
        
        li.innerHTML = `Cost Per Day : ${customerChoises.vehicle_price} €`
        ul.appendChild(li)
    

    part1.appendChild(ul)
    part1.appendChild(inputDays)
    part2.appendChild(document.createElement("h1"))
    part2.setAttribute("class", "resultDays")
    container.appendChild(part1)
    container.appendChild(part2)
    container.setAttribute("class", "choiseContainer")
    container.classList.add("dayShoosing")
    choises.appendChild(container)

}




function getFinalResult(name) {
    persontage.map(pert => {
        if (pert.name.localeCompare(name) == 0) {
            console.log("name : " + name);
            var aaz = 0
            prices.map(a => {
                if (a.name.localeCompare(customerChoises.Vname) == 0) {
                    console.log("price v : "+ a.price+" price Fuel : "+pert.per+" type"+ customerChoises.type);
                    customerChoises.vehicle_price = (a.price + (a.price * ((pert.per + parseFloat(customerChoises.type == 'automatic' ?  19  : 0))/ 100)) ).toFixed(2)
                }
            })
        }
    })
    console.log(customerChoises);

}

function prev() {


        currentActive -= 2;

        // keep it withing boundaries
        if (currentActive < 1) {
            currentActive = 1;
        }

    
    console.log(currentActive);
    update();
    if (customerChoises.vehicle_price != "") {
        var newChoises = choises.querySelectorAll(".choiseContainer");
        newChoises.forEach(elm => {
            elm.remove();
        })
        customerChoises.vehicle_price = ""
        customerChoises.fuelType = ""
        RoundTow(customerChoises.Vname)
    } else if (customerChoises.fuelType != "") {
        var newChoises = choises.querySelectorAll(".choiseContainer");
        newChoises.forEach(elm => {
            elm.remove();
        })
        customerChoises.fuelType = ""
        RoundTow(customerChoises.Vname)
    } else if (customerChoises.Vname != "") {
        firstRound()
     } 
    
    }







function update() {
    // set and remove active class dependent of the currentActive index
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {

            circle.classList.add('active');
            console.log(currentActive);
        } else {
            circle.classList.remove('active');
            console.log(currentActive);
        }
    });

    // get all the 'active' circles
    const actives = document.querySelectorAll('.circle.active');

    // get the % width for the progress bar
    // remove one from actives and circles in order to have steps like: 0%, 50%, 100%
    progress.style.width = `${(actives.length - 1) / (circles.length - 1) * 100}%`;
    console.log("in update " + currentActive);

    if (currentActive === 1) {
        // hide prev
        previous.disabled = true;
        submit.disabled = true;
    } else {
        // show prev
        previous.disabled = false;
    }
    if (currentActive === 4) {
       
        submit.disabled = false;
    } else {
        // show prev
        submit.disabled = true;
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function createlister() {
    console.log("start ===>");
    var inputDay = document.querySelector("#days")
    
    var h1 = document.querySelector(".resultDays h1")
    inputDay.addEventListener('input', function (e) {
        if(!isNaN(parseInt(e.data))){
            h1.innerHTML = (parseFloat(e.data) * parseFloat(customerChoises.vehicle_price)).toFixed(2)+" €"
            submit.disabled = false;

        }else{
            h1.innerHTML = "PLEASE INTER A VALIDE NUMBER"
            submit.disabled = true;
        }
       
    })

}


function firstRound() {

    customerChoises = {
        type: "",
        Vname: "",
        fuelType: "",
        vehicle_price: 0

    }

    var oldChoises = choises.querySelectorAll(".choiseContainer");
    oldChoises.forEach(elm => {
        console.log("here");
        elm.remove();
    })
    AutoV.forEach(elm => {
        let button = document.createElement("button")
        let container = document.createElement("div")
        let img = document.createElement("img")
        container.setAttribute("class", "choiseContainer")
        img.setAttribute("src", `img/${elm}.svg`)
        button.innerHTML = elm
        button.setAttribute('onclick', 'RoundTow(name)')
        button.setAttribute('name', elm)
        button.setAttribute('class', "ch")
        button.classList.add("btn")
        container.appendChild(img)
        container.appendChild(button)
        choises.appendChild(container)
    })

    manV.forEach(elm => {
        let button = document.createElement("button")
        let container = document.createElement("div")
        let img = document.createElement("img")
        container.setAttribute("class", "choiseContainer")
        img.setAttribute("src", `img/${elm}.svg`)
        button.innerHTML = elm
        button.setAttribute('onclick', 'RoundTow(name)')
        button.setAttribute('name', elm)
        button.setAttribute('class', "ch")
        button.classList.add("btn")
        container.appendChild(img)
        container.appendChild(button)
        choises.appendChild(container)
    })

    button = document.createElement("button")
        container = document.createElement("div")
        img = document.createElement("img")
        img.setAttribute("src", `img/moto.svg`)
        container.setAttribute("class", "choiseContainer")
        button.innerHTML = "Moto"
        button.setAttribute('name', "moto")
        button.setAttribute('onclick', 'RoundTow(name)')
        button.setAttribute('class', "ch")
        button.classList.add("btn")
        container.appendChild(img)
        container.appendChild(button)
        choises.appendChild(container)
}


function Submit() {
    var submition = document.querySelector("#days")
    var submitionPop = document.querySelector(".submitionPop")
    submitionPop.style.visibility = "visible"
    var toPay = document.querySelector(".resultDays h1")
    submition.style.visibility= "hidden"
    currentActive++;

    // keep it withing boundaries
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update(); 
    previous.disabled = true
    submit.disabled = true
    setTimeout(()=>{
        location.href = "/index.html"
    },5000)
    
    
}