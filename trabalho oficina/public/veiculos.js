var dataRef = new Firebase('https://oficina-8e242-default-rtdb.firebaseio.com/');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'veiculo') {

            var _itemsKey = Object.entries(valor);
    
    
    
            for (const [key2, value2] of _itemsKey) {
                count++;
    
                $("#tbveiculo tbody").append(
    
                    `<tr> +
    
                        <th scope="row">${count}</th> +
    
                        <td>${value2.ano}</td> +
    
                        <td>${value2.marca}</td> +
    
                        <td>${value2.modelo}</td> +

                        <td>${value2.placa}</td> +
    
                    </tr>`
    
                );
    
            }
        }


    }

});
