
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
        var resultado = ( años ) 
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

    
     // funcitions 
     // esto puede ser reutilizado tantas veces como necesites 

   


     // sumar kilometros a los coches usando una funcion para cambiarlos todos a la vez 


        function sumaDeKilometros ( km ){
            var result2 = km * 2 ;
            return result2;
        }

        var coches = [
         
            { marca : "volvo " , km : 300000 },
            { marca : "bmw " , km : 300000 },
            { marca : "audi " , km : 300000 },
            { marca : "mercedees " , km : 300000 }

        ]
                    //condicion de continuidad // incremento
        for ( i = 0 ; i < coches.length ; i++ ) {
            var coche = coches [i];
            var nuevosKilometros = sumaDeKilometros ( coche.km )

            coche.km = nuevosKilometros

        }
        console.log ( coches )


        

    var hello = function(name){
        return "hello, " + name + "!"}



        var average = function ( a , b , c ){
            var sum = a + b + c 
            var avg = sum / 3 
            return avg}
           
               average ( 10 , 20 , 30 )
    
               
               average.of5= function ( a , b , c , d , e ){
                var sum = ( a + b + c + d + e ) ;
                var avg = sum / 3 
                return avg }


                // como imprimir las dos array de golpe 


                var stuff = [ "html ", "css " , "JS"];
                var staff = [ "lau " , "flow " , " xa " , " eli ", "juan" ];
        
        
                function print ( array ) {
                    for ( var i = 0 ; i < array.length ; i++){
                    var value = array[i]
                    console.log ( value ) }   
                }
           
        
          
                console.log ( "print staff ")
                print(staff)
                console.log ( "print stuff ")
                print(stuff)
        
        
        
       

