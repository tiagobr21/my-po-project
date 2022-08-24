function buscarCep(event, form){
    event.preventDefault()

    const inputCep = form.cep;
    if(inputCep){
        const cep = inputCep.value;
        if(cep.length === 8){
            const URL = `https://viacep.com.br/ws/${cep}/json`;

            fetch(URL)
            .then(response => console.log(response.json()))
            .then(res  => {
                console.log(res)
            }  )
            
        }
    }

}

function mostrarResposta(cep) {
    const mensagem = `
        CEP: ${cep.cep},
        Logradouro: ${cep.logradouro},
        Complemento: ${cep.complemento},
        Bairro: ${cep.bairro},
        Cidade ${cep.cidade},
        Estado: ${cep.estado}
    `;
    alert(mensagem);
}

function cadastrarContato (form){
    let str = $( ".form" ).serialize();
    $( "#results" ).text( str );
            console.log( $( this ).serialize() );
   

}