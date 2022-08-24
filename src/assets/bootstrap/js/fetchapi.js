



(function readeJS(win,doc){

    "use strict";

    let btn = doc.querySelector('#btn');
    let result = doc.querySelector('#result');

    const jsonData = require("../../documentacao/diplomado_maysa.json")
    console.log(jsonData)
    var myHeaders = new Headers();
                                      
                                   
                                    myHeaders.append("Accept", "application/json");
                                    myHeaders.append("Content-Type", "application/json");
                                    myHeaders.append("Authorization", "Bearer "+`${token}`);
                                    
                                    var raw = JSON.stringify({
                                      "versao": "1.03",
                                      "codigo_interno": objTurma[j].DadosDiplomaDiplomadoID,
                                      "dados_academicos":  + `${alunosaDiplomar}`  
                                    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

    fetch("https://diploma.solis.com.br/api/diploma-digital/gerar", requestOptions)
                                        .then(
                                            function(response) {
                                                console.log(response.json());
                                            } 
                                        .then(function(data) {
                                          console.log(data.json());
                                          
                                            
                                          })
                                        .catch(error => console.log('error', error))

                                      )

                                    .catch(error => console.log('error', error));
    // function fetchSend(event) {
    //     let params = {
    //         method: 'POST',
    //         mode: 'cors',
    //         cache:'default'
    //     };
    //     fetch('controller.php',params)
    //     .then(function(response) {
    //             if(response.ok){
    //                 return response.json();
    //             }
    //         })
    //     .then(function(data) {
    //         console.log(data);
    //     })
    // }
    btn.addEventListener('click',fetchSend,false);

    
    
})(window,document);