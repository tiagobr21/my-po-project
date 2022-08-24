// Implementação do CRUD AJAX PHP

/************
 * Exibir dados da Mantenedora
 ************/

function exibirMantenedora() {

}

/************************************** */  
// Tratar o CODTIPOCURSO para selecionar turma a diplomar
/*************************************** */

function exibirCodTipoCurso() {
  
    var codCurso = document.getElementById("selectCurso");
    var value = codCurso.options[codCurso.selectedIndex].text;
    var txt = value.split("-");
    txtCodTipoCurso = txt[0];
    txtNomeCurso = txt[2];
    
  }
 
  /************************************** */  
    // Selecionar o CURSO a diplomar
    /*************************************** */
  $("#selectCurso").change((e)=>{
      e.preventDefault();
      //console.log($(e.target).val())

      var codCurso = ($(e.target).val());
          
      /************************************** */  
      // Buscar as TURMAS mediante CURSO selecionado 
      /*************************************** */
      $.ajax({

          type: "GET",
          url: 'buscaTurma.php?codCurso='+codCurso,
        
          //data: codCurso,
          
          beforeSend: function(){
            $("#mod_sel").html('<img src="./bootstrap/img/loading.gif"></');
          },
          success: function(response)
          {

              const objTurma = JSON.parse(response);
              let textTurma =`<div class='d-flex flex-row bd-highlight '  style='display: block;'><div class='p-4 h4 mt-3 mb-1 text-primary '><br><div class='p-6 ml-2 bd-highlight'><input type="checkbox" onClick="toggle(this)"> Marcar | Desmarcar todos</div>`;
              let textSelecionados =`<div class='d-flex flex-row bd-highlight '  style='display: block;'><div class='p-4 h4 mt-3 mb-1 text-primary '><br><div class='p-6 ml-2 bd-highlight'><input type="checkbox" onClick="toggle(this)"> Marcar | Desmarcar todos</div>`;

              //***********
              // Preenchimento da DIV com dados do DIPLOMADO
              //************************/
              for (let i in objTurma){
                        textTurma += `<div class="text-primary p-3" >
                        <input type="checkbox" name="chkTurma" class="checkbox-primary" id="${objTurma[i].DadosDiplomaDiplomadoID}" value=${objTurma[i].DadosDiplomaDiplomadoNome}>
                        <i class="text-primary fa fa-lg fa-user"></i>
                        <strong>${objTurma[i].DadosDiplomaDiplomadoNome}</strong><h6 class="h-4  bd-highlight">Id: # ${objTurma[i].DadosDiplomaDiplomadoID} | CPF: ${objTurma[i].DadosDiplomaDiplomadoCPF} | Data da colação de grau: ${objTurma[i].DadosRegistroLivroRegistroDataColacaoGrau}</h6></div>`;
               }
               textTurma += "<hr></div></div>";
                          //alert(textTurma)
              $("#mod_sel").html(textTurma);
              
                    

              /*************
              * Selecionar alunos para enviar para API DDS e gerar os XML e RVDD
              ************/

              const btn = document.querySelector('#btnEnviar');
                    // 
                    //     $("input[name="chkTurma"]:checked").$.each(function (indexInArray, valueOfElement) { 
                    //       let checkboxes = ($(this).val());

              btn.addEventListener('click', (event) => {
              let checkboxes = document.querySelectorAll('input[name="chkTurma"]:checked'); 
              let values = [];
              checkboxes.forEach((checkbox) => {
                    
                    values.push(checkbox);

               })

                for (let i = 0; i < values.length; i++) {

                  for (let j =0; j < objTurma.length; j++) {
                      if ((values[i].id) === (objTurma[j].DadosDiplomaDiplomadoID)){
                          var alunosaDiplomar = objTurma[j]
                          console.log(alunosaDiplomar)
                         


                          $('#enviar').on('click', function(e){
                            e.preventDefault();
                            $.ajax({
                              url: "novoprocessoAlunos.php" + alunosaDiplomar,
                              method: "POST",
                              beforeSend: function(){
                                //$("#mod_sel").html('<img src="./bootstrap/img/loading.gif"></');
                              },
                              success: function(response){

                                  const objTurma = JSON.parse(response);
                                  let textTurma =`<div class='d-flex flex-row bd-highlight '  style='display: block;'><div class='p-4 h4 mt-3 mb-1 text-primary '><br><div class='p-6 ml-2 bd-highlight'><input type="checkbox" onClick="toggle(this)"> Marcar | Desmarcar todos</div>`;
                                  let textSelecionados =`<div class='d-flex flex-row bd-highlight '  style='display: block;'><div class='p-4 h4 mt-3 mb-1 text-primary '><br><div class='p-6 ml-2 bd-highlight'><input type="checkbox" onClick="toggle(this)"> Marcar | Desmarcar todos</div>`;
                        
                                  //***********
                                  // Preenchimento da DIV com dados do DIPLOMADO
                                  //************************/
                                  for (let i in objTurma){
                                      textTurma += `<div class="text-primary p-3" >
                                      <input type="checkbox" name="chkTurma" class="checkbox-primary" id="${objTurma[i].DadosDiplomaDiplomadoID}" value=${objTurma[i].DadosDiplomaDiplomadoNome}>
                                      <i class="text-primary fa fa-lg fa-user"></i>
                                      <strong>${objTurma[i].DadosDiplomaDiplomadoNome}</strong><h6 class="h-4  bd-highlight">Id: # ${objTurma[i].DadosDiplomaDiplomadoID} | CPF: ${objTurma[i].DadosDiplomaDiplomadoCPF} | Data da colação de grau: ${objTurma[i].DadosRegistroLivroRegistroDataColacaoGrau}</h6></div>`;
                                  }
                                  console.log(objTurma)
                                  textTurma += "<hr></div></div>";
                                  $("#mod_sel").html(textTurma);

                                 
                    
                              },
                              error: function(error){
                                console.log(error)
                              }
                            })

                          })

                          /************
                           * Acessar API DDS
                           ***********/
                          let myHeaders = new Headers();
                          myHeaders.append("Accept", "application/json");
                          myHeaders.append("Content-Type", "application/json");
                          myHeaders.append("Client", "821e1b333ff05885fb91036a46bfdbc334d8b887d78641eac101957020220b70");

                          let raw = JSON.stringify({
                            "email": "hugo.santos@fametro.edu.br",
                            "password": "novasenha"
                          });
                          var idDiploma;
                          var diploma;
                          var documentacao;
                          var rvdd;

                          let requestOptions = {
                            method: 'POST',
                            headers: myHeaders,
                            body: raw,
                            redirect: 'follow'
                          };

                          fetch("https://diploma.solis.com.br/api/login", requestOptions)
                            .then(response => response.json())
                            .then(results => {
                              let { token } = results.data
                              $("#mod_sel").html('Acessando API DDS com sucesso!<br> <img src="./bootstrap/img/loading.gif">');
                              let myHeaders1 = new Headers();
                              myHeaders1.append("Accept", "application/json");
                              myHeaders1.append("Content-Type", "application/json");
                              myHeaders1.append("Authorization", "Bearer "+`${token}`);
                              let raw1 = JSON.stringify(
                                {
                                            "versao": "1.03",
                                            "codigo_interno": "1641",
                                            "dados_academicos": {
                                              "DadosDiplomaDiplomadoID": "4631",
                                              "DadosDiplomaDiplomadoNome": "MAYSA DESIRRÊ PARENTE BASTOS",
                                              "DadosDiplomaDiplomadoNomeSocial": null,
                                              "DadosDiplomaDiplomadoNacionalidade": "brasileira",
                                              "DadosDiplomaDiplomadoSexo": "F",
                                              "DadosDiplomaDiplomadoDataNascimento": "1988-12-19",
                                              "DadosDiplomaDiplomadoCPF": "96812559253",
                                              "DadosDiplomaDiplomadoRGNumero": "5462684",
                                              "DadosDiplomaDiplomadoRGOrgaoExpedidor": "SSP",
                                              "DadosDiplomaDiplomadoRGUF": "PA",
                                              "DadosDiplomaDiplomadoNaturalidadeCodigoMunicipio": "1501402",
                                              "DadosDiplomaDiplomadoNaturalidadeNomeMunicipio": "Belém",
                                              "DadosDiplomaDiplomadoNaturalidadeUF": "PA",
                                              "DadosDiplomaDiplomadoNaturalidadeNomeMunicipioEstrangeiro": "NULL",
                                              "RegistroReqDadosPrivadosDiplomadoFiliacaoGenitores": [
                                                {
                                                  "RegistroReqDadosPrivadosDiplomadoFiliacaoGenitorNome": "Raimundo Pereira",
                                                  "RegistroReqDadosPrivadosDiplomadoFiliacaoGenitorNomeSocial": "Raimundo Pereira",
                                                  "RegistroReqDadosPrivadosDiplomadoFiliacaoGenitorSexo": "M"
                                                }
                                              ],
                                              "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarDataEmissaoHistorico": "2021-11-24",
                                              "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarSituacaoAluno": "Aprovado",
                                              "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarCargaHorariaCursoIntegralizadaHoraAula": 6000,
                                              "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinasCursadas": [
                                                {
                                                  "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaDisciplina": "ÉTICA, BIOÉTICA E ASPECTOS LEGAIS DA PROFISSÃO",
                                                  "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaPeriodo": "DisciplinaCursadaPeriodo",
                                                  "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaCargaHorariaHoraAula": 60,
                                                  "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaNotaAteCem": "null",
                                                  "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaNota": "7.5000",
                                                  "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaConceito": null,
                                                  "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaSituacao": "Aprovado",
                                                  "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaDocentes": [
                                                    {
                                                      "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaDocenteNome": "ROSIMAR HONORATO LOBO",
                                                      "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaDocenteTitulacao": "Mestrado",
                                                      "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaDocenteLattes": null,
                                                      "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarMatrizCurricularDisciplinaCursadaDocenteCPF": "43711588204"
                                                    }
                                                  ]
                                                }
                                              ],
                                              "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarDataProvaEnade": "2022-01-12",
                                              "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarENADESituacao": "Dispensado, por ato da instituição de ensino",
                                              "RegistroReqDadosPrivadosDiplomadoHistoricoEscolarENADEOutraSituacao": "NULL",
                                              "RegistroReqDadosPrivadosDiplomadoCargaHorariaCursoHoraAula": 3202,
                                              "RegistroReqDadosPrivadosDiplomadoIngressoCursoData": "2017-06-30",
                                              "RegistroReqDadosPrivadosDiplomadoIngressoCursoFormaAcesso": "Vestibular",
                                              "RegistroReqDadosPrivadosDiplomadoIngressoCursoDataConclusao": "2021-06-25",
                                              "RegistroReqTermoResponsabilidadeNome": "ISMAEL FRAZAO DA SILVA",
                                              "RegistroReqTermoResponsabilidadeCPF": "85105740220",
                                              "RegistroReqTermoResponsabilidadeCargo": "PROCURADOR INSTITUCIONAL",
                                              "RegistroReqTermoResponsabilidadeAtoDesignacao": "Li9wZGZzL1RoYWxlc1JvYmVydG8xNDU2OTg3MjAxNS5wZGY=",
                                              "RegistroReqDocumentacaoComprobatoriaDocumentos": [
                                                {
                                                  "RegistroReqDocumentacaoComprobatoriaDocumentoTipo": "HistoricoEscolar",
                                                  "RegistroReqDocumentacaoComprobatoriaDocumentoDocumento": "Li9wZGZzL1RoYWxlc1JvYmVydG8xNDU2OTg3MjAxNS5wZGY=",
                                                  "RegistroReqDocumentacaoComprobatoriaDocumentoObservacoes": "2021-06-25"
                                                }
                                              ],
                                              "DadosDiplomaDataConclusao": "2021-06-25",
                                              "DadosDiplomaDadosCursoNomeCurso": "BIOMEDICINA",
                                              "DadosDiplomaDadosCursoNomeHabilitacao": "BIOMEDICINA",
                                              "DadosDiplomaDadosCursoCodigoCursoEMEC": 1043865,
                                              "DadosDiplomaDadosCursoTituloConferidoTitulo": "Bacharel",
                                              "DadosDiplomaDadosCursoTituloConferidoOutroTitulo": "Bacharelado",
                                              "DadosDiplomaDadosCursoGrauConferido": "Bacharelado",
                                              "DadosDiplomaDadosCursoModalidade": "Presencial",
                                              "DadosDiplomaDadosCursoEnderecoLogradouro": "Av Constantino Ney",
                                              "DadosDiplomaDadosCursoEnderecoNumero": "3000",
                                              "DadosDiplomaDadosCursoEnderecoComplemento": "null",
                                              "DadosDiplomaDadosCursoEnderecoBairro": "Chapada",
                                              "DadosDiplomaDadosCursoEnderecoCEP": "69305120",
                                              "DadosDiplomaDadosCursoEnderecoCodigoMunicipio": "1302603",
                                              "DadosDiplomaDadosCursoEnderecoNomeMunicipio": "Manaus",
                                              "DadosDiplomaDadosCursoEnderecoUF": "AM",
                                              
                                              "DadosDiplomaDadosCursoAutorizacaoTipo": "Resolução",
                                              "DadosDiplomaDadosCursoAutorizacaoNumero": "6",
                                              "DadosDiplomaDadosCursoAutorizacaoData": "2021-06-25",
                                              "DadosDiplomaDadosCursoAutorizacaoVeiculoPublicacao": "01",
                                              "DadosDiplomaDadosCursoAutorizacaoDataPublicacao": "2021-06-25",
                                              "DadosDiplomaDadosCursoAutorizacaoSecaoPublicacao": 1,
                                              "DadosDiplomaDadosCursoAutorizacaoPaginaPublicacao": 98,
                                              "DadosDiplomaDadosCursoReconhecimentoTipo": "Resolução",
                                              "DadosDiplomaDadosCursoReconhecimentoNumero": "6",
                                              "DadosDiplomaDadosCursoReconhecimentoData": "2021-09-27",
                                              "DadosDiplomaDadosCursoReconhecimentoVeiculoPublicacao": "diario oficial",
                                              "DadosDiplomaDadosCursoReconhecimentoDataPublicacao": "2021-09-27",
                                              "DadosDiplomaDadosCursoReconhecimentoSecaoPublicacao": 21,
                                              "DadosDiplomaDadosCursoReconhecimentoPaginaPublicacao": 452,
                                              "DadosDiplomaDadosCursoRenovacaoReconhecimentoTipo": "Resolução",
                                              "DadosDiplomaDadosCursoRenovacaoReconhecimentoNumero": "6",
                                              "DadosDiplomaDadosCursoRenovacaoReconhecimentoData": "2021-09-27",
                                              "DadosDiplomaDadosCursoRenovacaoReconhecimentoVeiculoPublicacao": "diario oficial",
                                              "DadosDiplomaDadosCursoRenovacaoReconhecimentoDataPublicacao": "2021-09-27",
                                              "DadosDiplomaDadosCursoRenovacaoReconhecimentoSecaoPublicacao": 23,
                                              "DadosDiplomaDadosCursoRenovacaoReconhecimentoPaginaPublicacao": 21,
                                              "DadosDiplomaIesEmissoraCodigoMEC": 235665,
                                              "DadosDiplomaIesEmissoraNome": "CENTRO UNIVERSITÁRIO FAMETRO",
                                              "DadosDiplomaIesEmissoraCNPJ": "03817341000657",
                                              "DadosDiplomaIesEmissoraEnderecoLogradouro": "av constantino nery",
                                              "DadosDiplomaIesEmissoraEnderecoNumero": "30000",
                                              "DadosDiplomaIesEmissoraEnderecoComplemento": null,
                                              "DadosDiplomaIesEmissoraEnderecoBairro": "Chapada",
                                              "DadosDiplomaIesEmissoraEnderecoCEP": "69305120",
                                              "DadosDiplomaIesEmissoraEnderecoCodigoMunicipio": "1302603",
                                              "DadosDiplomaIesEmissoraEnderecoNomeMunicipio": "Manaus",
                                              "DadosDiplomaIesEmissoraEnderecoUF": "AM",
                                              "DadosDiplomaIesEmissoraCredenciamentoTipo": "Resolução",
                                              "DadosDiplomaIesEmissoraCredenciamentoNumero": "235",
                                              "DadosDiplomaIesEmissoraCredenciamentoData": "2021-01-27",
                                              "DadosDiplomaIesEmissoraCredenciamentoVeiculoPublicacao": "diario oficial",
                                              "DadosDiplomaIesEmissoraCredenciamentoDataPublicacao": "2021-01-27",
                                              "DadosDiplomaIesEmissoraCredenciamentoSecaoPublicacao": 23,
                                              "DadosDiplomaIesEmissoraCredenciamentoPaginaPublicacao": 1235,
                                              "DadosDiplomaIesEmissoraRecredenciamentoTipo": "Resolução",
                                              "DadosDiplomaIesEmissoraRecredenciamentoNumero": "23",
                                              "DadosDiplomaIesEmissoraRecredenciamentoData": "2021-01-27",
                                              "DadosDiplomaIesEmissoraRecredenciamentoVeiculoPublicacao": "diario oficial",
                                              "DadosDiplomaIesEmissoraRecredenciamentoDataPublicacao": "2021-01-27",
                                              "DadosDiplomaIesEmissoraRecredenciamentoSecaoPublicacao": 23,
                                              "DadosDiplomaIesEmissoraRecredenciamentoPaginaPublicacao": 102,
                                              "DadosDiplomaIesEmissoraRenovacaoDeRecredenciamentoTipo": "Resolução",
                                              "DadosDiplomaIesEmissoraRenovacaoDeRecredenciamentoNumero": "23",
                                              "DadosDiplomaIesEmissoraRenovacaoDeRecredenciamentoData": "2021-01-27",
                                              "DadosDiplomaIesEmissoraRenovacaoDeRecredenciamentoVeiculoPublicacao": "DIARIO OFICIAL",
                                              "DadosDiplomaIesEmissoraRenovacaoDeRecredenciamentoDataPublicacao": "2021-01-27",
                                              "DadosDiplomaIesEmissoraRenovacaoDeRecredenciamentoSecaoPublicacao": 23,
                                              "DadosDiplomaIesEmissoraRenovacaoDeRecredenciamentoPaginaPublicacao": 121,
                                              "DadosDiplomaIesEmissoraMantenedoraRazaoSocial": "CENTRO UNIVERSITÁRIO FAMETRO",
                                              "DadosDiplomaIesEmissoraMantenedoraCNPJ": "03817341000657",
                                              "DadosDiplomaIesEmissoraMantenedoraEnderecoLogradouro": "av constantino nery",
                                              "DadosDiplomaIesEmissoraMantenedoraEnderecoNumero": "3000",
                                              "DadosDiplomaIesEmissoraMantenedoraEnderecoComplemento": null,
                                              "DadosDiplomaIesEmissoraMantenedoraEnderecoBairro": "Chapada",
                                              "DadosDiplomaIesEmissoraMantenedoraEnderecoCEP": " 69065060",
                                              "DadosDiplomaIesEmissoraMantenedoraEnderecoCodigoMunicipio": "1302603",
                                              "DadosDiplomaIesEmissoraMantenedoraEnderecoNomeMunicipio": "Manaus",
                                              "DadosDiplomaIesEmissoraMantenedoraEnderecoUF": "AM",
                                              "DadosRegistroIesRegistradoraCodigoMEC": 235665,
                                              "DadosRegistroIesRegistradoraNome": "CENTRO UNIVERSITÁRIO FAMETRO",
                                              "DadosRegistroIesRegistradoraCNPJ": "03817341000657",
                                              "DadosRegistroIesRegistradoraEnderecoLogradouro": "av constantino nery",
                                              "DadosRegistroIesRegistradoraEnderecoNumero": "3000",
                                              "DadosRegistroIesRegistradoraEnderecoComplemento": null,
                                              "DadosRegistroIesRegistradoraEnderecoBairro": "Chapada",
                                              "DadosRegistroIesRegistradoraEnderecoCEP": "30000000",
                                              "DadosRegistroIesRegistradoraEnderecoCodigoMunicipio": "1302603",
                                              "DadosRegistroIesRegistradoraEnderecoNomeMunicipio": "Manaus",
                                              "DadosRegistroIesRegistradoraEnderecoUF": "AM",
                                              "DadosRegistroIesRegistradoraCredenciamentoTipo": "Resolução",
                                              "DadosRegistroIesRegistradoraCredenciamentoNumero": "23",
                                              "DadosRegistroIesRegistradoraCredenciamentoData": "2021-01-27",
                                              "DadosRegistroIesRegistradoraCredenciamentoVeiculoPublicacao": "diario oficial",
                                              "DadosRegistroIesRegistradoraCredenciamentoDataPublicacao": "2021-01-27",
                                              "DadosRegistroIesRegistradoraCredenciamentoSecaoPublicacao": 1,
                                              "DadosRegistroIesRegistradoraCredenciamentoPaginaPublicacao": 236,
                                              "DadosRegistroIesRegistradoraRecredenciamentoTipo": "Resolução",
                                              "DadosRegistroIesRegistradoraRecredenciamentoNumero": "2301",
                                              "DadosRegistroIesRegistradoraRecredenciamentoData": "2021-01-27",
                                              "DadosRegistroIesRegistradoraRecredenciamentoVeiculoPublicacao": "DIARIO OFICIAL",
                                              "DadosRegistroIesRegistradoraRecredenciamentoDataPublicacao": "2021-01-27",
                                              "DadosRegistroIesRegistradoraRecredenciamentoSecaoPublicacao": 3,
                                              "DadosRegistroIesRegistradoraRecredenciamentoPaginaPublicacao": 23,
                                              "DadosRegistroIesRegistradoraRenovacaoDeRecredenciamentoTipo": "Resolução",
                                              "DadosRegistroIesRegistradoraRenovacaoDeRecredenciamentoNumero": "0231",
                                              "DadosRegistroIesRegistradoraRenovacaoDeRecredenciamentoData": "2021-01-27",
                                              "DadosRegistroIesRegistradoraRenovacaoDeRecredenciamentoVeiculoPublicacao": "DIARIO OFICIAL",
                                              "DadosRegistroIesRegistradoraRenovacaoDeRecredenciamentoDataPublicacao": "27-01-2021",
                                              "DadosRegistroIesRegistradoraRenovacaoDeRecredenciamentoSecaoPublicacao": 3,
                                              "DadosRegistroIesRegistradoraRenovacaoDeRecredenciamentoPaginaPublicacao": 1,
                                              "DadosRegistroIesRegistradoraMantenedoraRazaoSocial": "CENTRO UNIVERSITÁRIO FAMETRO",
                                              "DadosRegistroIesRegistradoraMantenedoraCNPJ": "03817341000657",
                                              "DadosRegistroIesRegistradoraMantenedoraEnderecoLogradouro": "AV. CONSTANTINO NERY",
                                              "DadosRegistroIesRegistradoraMantenedoraEnderecoNumero": "3000",
                                              "DadosRegistroIesRegistradoraMantenedoraEnderecoComplemento": null,
                                              "DadosRegistroIesRegistradoraMantenedoraEnderecoBairro": "CHAPADA",
                                              "DadosRegistroIesRegistradoraMantenedoraEnderecoCEP": "69065060",
                                              "DadosRegistroIesRegistradoraMantenedoraEnderecoCodigoMunicipio": "1302603",
                                              "DadosRegistroIesRegistradoraMantenedoraEnderecoNomeMunicipio": "MANAUS",
                                              "DadosRegistroIesRegistradoraMantenedoraEnderecoUF": "AM",
                                              "DadosRegistroLivroRegistroLivroRegistro": "NUT_01",
                                              "DadosRegistroLivroRegistroNumeroFolhaDoDiploma": "44",
                                              "DadosRegistroLivroRegistroNumeroSequenciaDoDiploma": "451",
                                              "DadosRegistroLivroRegistroProcessoDoDiploma": "116718",
                                              "DadosRegistroLivroRegistroDataColacaoGrau": "2021-08-27",
                                              "DadosRegistroLivroRegistroDataExpedicaoDiploma": "2021-08-27",
                                              "DadosRegistroLivroRegistroDataRegistroDiploma": "2021-08-27",
                                              "DadosRegistroLivroRegistroResponsavelRegistroNome": "ANDREA MARIA DE SOUZA",
                                              "DadosRegistroLivroRegistroResponsavelRegistroCPF": "37197510074",
                                              "DadosRegistroLivroRegistroResponsavelRegistroIDouNumeroMatricula": "0231",
                                              "DadosRegistroIdDocumentacaoAcademica": "456123",
                                              "DadosRegistroSegurancaCodigoValidacao": "123",
                                              "DadosRegistroInformacoesAdicionais": "Texto aberto contendo informações adicionais do registro do diploma."
                                            }
                                          }
                                        );
                                      
                                      let requestOptions1 = {
                                        method: 'POST',
                                        headers: myHeaders1,
                                        body: raw1,
                                        redirect: 'follow'
                                      };

                                      fetch("https://diploma.solis.com.br/api/diploma-digital/gerar", requestOptions1)
                                          .then(response => response.json())
                                          .then(res => {
                                            var success = res.success;
                                            var data = res.data;
                                            console.log(data.diploma, data.codigo_interno)
                                            idDiploma = data.id_diploma;
                                            diploma = data.diploma;
                                            documentacao = data.documentacao;
                                            rvdd = data.rvdd;
                                            let arquivoDiploma = downloadXml("dip_"+idDiploma,diploma)
                                            let arquivoDocumentacao = downloadXml("doc_"+idDiploma,documentacao)
                                            let arquivorvdd = downloadPDF(rvdd,"dip_"+idDiploma);
                                             $("#mod_sel").html('Dados recebidos com sucesso! <br/> ID do diploma: ' +JSON.stringify(idDiploma) + '<hr>' + JSON.stringify(diploma))

                                              
                                            })
                                          .catch(error => console.log('error', error));



                                    })
                                    .catch(error => console.log('error', error));

                                }

                            }
                          }
                      })
                  }
                 
              })
             
        })
      

        
      $("#btnEnviar").on('click',(e)=>{
        e.preventDefault();
   
      let checkboxes = document.querySelectorAll('input[name="chkTurma"]:checked'); 
      let values = [];
      checkboxes.forEach((checkbox) => {
        
          values.push(checkbox);


        })

        for (let i = 0; i < values.length; i++) {

          for (let j =0; j < objTurma.length; j++) {
              if ((values[i].id) === (objTurma[j].DadosDiplomaDiplomadoID)){

                var alunosaDiplomar = objTurma[j]
              }   
       
              }
            }
              alert(alunosaDiplomar);

     })
      
  /************************************** */  
  // Selecionar os alunos a diplomar
  /*************************************** */

        /******************
        * Marcar ou desmarcar alunos da turma a diplomar
        *****************/

         function toggle(source) {
          checkboxes = document.getElementsByName('chkTurma');
          for (var i = 0, n = checkboxes.length; i < n; i++) {
              checkboxes[i].checked = source.checked;
              
          }
      }
       
         
       /************************************** */  
       // Selecionar | Desmarcar todos os alunos
       /*************************************** */
       function check(checked = true) {
            const checkboxes = document.querySelectorAll('input[name="chkTurma"]');
            checkboxes.forEach((checkbox) => {
            checkbox.checked = checked;
          });
        }
       
       
 
         function checkAll() {
           check();
             this.onclick = uncheckAll;
           }
 
         function uncheckAll() {
           check(false);
             this.onclick = checkAll;
         }
 
         function selectAll(){
          const  btna = document.querySelector('#btnTodos');
          check()
          
          }
         
          function unSelectAll(){
            const  btna = document.querySelector('#btnTodos');
            check(false);
            
            }
 

            function checkProgresso(){
              const progresso = document.querySelector(".barra div");
              const input = document.querySelector("input");
              const alterarProgresso = () => {
                  progresso.setAttribute("style","width: "+ input.value+20  + "%");
              }
            }
                                    
            $(function() {

              var $progress         = $('.progress'), // Barra de Progresso.
                  $progressElements = $('.progress'), // Elementos que devem ser checados
                                                      // para modificar o valor da barra.
                  TOTAL             = $progressElements.length; // Total de elementos.
            
              
              $progressElements.on('blur, change', function() {
                
                // Faz um filtro com o total elementos válidos.
                // Nesse caso, campos que não estejam "em branco" e que não estejam marcados
                // como ':invalid'.
                var valid = $progressElements.filter(function() {
                  return ($(this).val() || $(this).prop('checked')) && !$(this).is(':invalid');
                }).length;
                
                // Calcula a porcentagem e altera o valor da barra.
                var percent = (valid * 100) / TOTAL,
                    current = $progress.val();
                
                var increase = percent > current;
                    
                var transition = setInterval(function(){
                  if((increase && current >= percent) ||
                    (!increase && current <= percent))
                      clearInterval(transition);
                  
                  var value = $progress.val();
                  value = increase ? value+1 : value-1;
                  current = value;
                  
                  $progress.val(current);
                }, 10);    
              });
            });



            /**
 * requestPdf function to return a PDF from API endpoint * Converts base64 string to blob and inits download
 * @param {String} url
 * @param {Object} payload
 */
const requestPdf = async (url, payload) => {
  return await axios.post(url, payload).then((response) => {
    const linkSource = `data:application/pdf;base64,${response}`
    const pdfBlob = dataURItoBlob(linkSource)

    /**
     * Internet Explorer stuff!
     */
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(pdfBlob, `${Date.now()}.pdf`)
      return
    }

    const url = window.URL.createObjectURL(pdfBlob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `${Date.now()}.pdf`)
    document.body.appendChild(link)
    link.click()

    link.remove()
    return response
  })
}

function downloadXml(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:application/xml;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

 
function downloadPDF(pdf,id) {
  const linkSource = `data:application/pdf;base64,${pdf}`;
  const downloadLink = document.createElement("a");
  const fileName = `${id}.pdf`;
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
}