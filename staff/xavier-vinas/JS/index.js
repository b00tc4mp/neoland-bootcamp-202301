
// incrementar el precio un 10 % 

// creas la funcion para incrementar el precio y le pasas un parametro 
function incrementarPrecio ( number ){
    var result = number * 1.1 //creas la funcion para hacer la operacion 
    return result // te retorna el resultado de la variable " result "
}


var products = [ // array de objetos y quieres incrementar el "price"
    { name : "milk " , price : 10 },
    { name : "bread " , price: 5 },
    { name : "beer" , price : 15 },
    {name : "cheese " , price : 20 } ]

    for ( i = 0 ; i < products.length ; i++ ){ // recorres la array 

        var product = products[i]; //creas una nueva variable y le añades [i]
        var newPrice = incrementarPrecio ( product.price)
        //creas la variable newPrice , usas la funcon y le pasas los parametros del precio que quieres incrementar 
        product.price= newPrice ; 
        //entras dentro de el objeto price con .price y lo pones igual que la nueva variable con la funcion 
     
      
       }
       //console.log para que no se repuita las veces que tenga objetos el codigo 
       console.log ( products ) 
       
      
     

    // sumar dos años 


       function sumarDosAños ( años ) {
        var resultado = ( años ) + 2 
        return resultado 
       }

     var personas  = [

        { nombre: "juan " , age : 30},
        { nombre :" alberto ", age : 20},
        { nombre : "xavi " , age : 35 },]

        for ( i = 0 ; i < personas.length ; i++){
            var persona = personas [i];
            var nuevaEdad = sumarDosAños( persona.age); 

            persona.age = nuevaEdad ; 

        }
        console.log  ( personas )



        function AumentarKm ( kilometros ){
            var resultado2 = ( kilometros) * 2 
            return resultado2 ; 
        }

        var coches  = [ 
            { marca : " volvo " , km : " 30.000"} ,
            { marca : " seat " , km : " 35.000"} ,
            { marca : " BMW " , km : " 34.000"} ,
            { marca : " toyota " , km : " 37.000"}
        ]

        for ( i = 0 ; i < coches.length ; i++){

            var coche = coches[i];
            var nuevosKm = AumentarKm  ( coche.km )

            coche.km = nuevosKm ;
        }
        console.log (coches )
        

     // funcitions 
     // esto puede ser reutilizado tantas veces como necesites 

     function doTheMath ( num1,num2 ){
        var result = ( num1 + num2 )* 1000; // creas una variable resultado para hacer la operacion que necesites  
        return result  
     }

     var a = 3 ;
     var b = 4 ; 

     var c = doTheMath ( a , b );
     console.log (c);


     var d = 10 ;
     var e = 50 ; 

     var f = doTheMath ( d , e );
     console.log (f)






     