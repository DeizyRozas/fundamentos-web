function pizzaOven(tipoCorteza, tipoSalsa, quesos, agregados){
    var pizza={};
    pizza.tipoCorteza= tipoCorteza;
    pizza.tipoSalsa=tipoSalsa;
    pizza.quesos=quesos;
    pizza.agregados=agregados;
    return pizza;
}

var pizzaChicago = pizzaOven("estilo Chicago", "tradicional", "mozzarella", ["pepperoni", "salchicha"]);
console.log(pizzaChicago);

var pizzaGriega = pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"] );
console.log(pizzaGriega);

var pizzaMargarita =pizzaOven ("delgada", "tomate san Manzano", "Mozzarella fior di latte", "albahaca");
console.log(pizzaMargarita);

var pizzaIrani = pizzaOven ("gruesa", "tradicional", "panir", ["carne molida", "salchicha", "champiñones", "pimiento morrón", "cebolla"]);
console.log(pizzaIrani);