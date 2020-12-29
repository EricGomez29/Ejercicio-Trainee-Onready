/*--Código en ingles (por buenas prácticas) pero documentación en español--*/

/*Funciones auxiliares*/

const convertCurrency = (price) => {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//Creando clase/plantilla para las motocicletas
class Motorcycle {
    constructor(trademark, model, displacement, price) {
        this.trademark = trademark;
        this.model = model;
        this.displacement = displacement;
        this.price = price;
    }

    motorcycle() {
        return `Marca: ${this.trademark} // Modelo: ${this.model} // Cilindrada: ${this.displacement}cc // Precio: $${convertCurrency(this.price)}`;
    }
}

//Creando clase/plantilla para los automoviles
class Car {
    constructor(trademark, model, doors, price) {
        this.trademark = trademark;
        this.model = model;
        this.doors = doors;
        this.price = price;
    }

    car() {
        return `Marca: ${this.trademark} // Modelo: ${this.model} // Puertas: ${this.doors} // Precio: $${convertCurrency(this.price)}`;
    }
}

/*===============================SIMULACIÓN DE BASE DE DATOS=======================*/
/**/
/**/   //creación de vehículos (autos y motos)
/**/   let peugeot208 = new Car('Peugeot', '208', '5', 250000.00);
/**/   let hondaTitan = new Motorcycle('Honda', 'Titan', '125', 60000.00);
/**/   let peugeot206 = new Car('Peugeot', '206', '5', 200000.00);
/**/   let yamahaYBR = new Motorcycle('Yamaha', 'YBR', '160', 80500.50);
/**/   let audiTT = new Car('Audi', 'TT', '3', 5000000.00);
/**/
/**/   //guardar los vehículos para calcular sus precios mas adelante - DB
/**/   const storagedVehicles = [
/**/       peugeot208,
/**/       hondaTitan,
/**/       peugeot206,
/**/       yamahaYBR,
/**/       audiTT,
/**/   ];
/**/
/*=================================================================================*/

//logs de los vehículos
function printList() {
    console.log(peugeot208.car());
    console.log(hondaTitan.motorcycle());
    console.log(peugeot206.car());
    console.log(yamahaYBR.motorcycle());
    console.log(audiTT.car());
}

//Calcular el vehículo mas caro
function printMoreExpensive(arr) {
    var prices = []
    //guardo los precios en un array
    arr.map(e => {
        prices.push(e.price)
    })
    //Usando funciones nativas de JavaScript obtengo el numero mayor dentro del array
    var max = Math.max.apply(null, prices)
    //Filtro el objeto que coincida con el precio guardado en 'prices'
    var filtrado = arr.filter(e => {
        return e.price === max
    })
    return console.log(`Vehículo más caro: ${filtrado[0].trademark} ${filtrado[0].model}`)
}

//Calcular el vehículo mas barato
function printMoreCheap(arr) {
    var prices = []
    arr.map(e => {
        prices.push(e.price)
    })
    var min = Math.min.apply(null, prices)
    var filtrado = arr.filter(e => {
        return e.price === min
    })
    return console.log(`Vehículo más barato: ${filtrado[0].trademark} ${filtrado[0].model}`)
}

//Filtrar por query
function filterQuery(query) {
    var models = [];
    storagedVehicles.map(e => {
        models.push(e.model)
    })
    var queryFiltered = storagedVehicles.filter(e => {
        return e.model.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
    var names;
    for (let i = 0; i < queryFiltered.length; i++) {
        if(i > 0) {
            names +=` // ${queryFiltered[i].trademark} ${queryFiltered[i].model} $${convertCurrency(queryFiltered[i].price)}`;
        } else {
            names = `${queryFiltered[i].trademark} ${queryFiltered[i].model} $${convertCurrency(queryFiltered[i].price)}`;
        }       
    }
    return console.log(`Vehículo/s que contiene/n en el modelo la/s letra/s ‘${query}’: ${names}`);
}

/*==============================LOGS======================*/

console.log('')//Salto de linea
printList()
console.log('')//Salto de linea
printMoreExpensive(storagedVehicles);
printMoreCheap(storagedVehicles)
filterQuery('20')