                        

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
                             token = JSON.stringify(token)
                             $("#mod_sel").html('Acessando API DDS normalmente com token: ' + token);
                           })
                          .catch(error => console.log('error', error));


                        console.log('token', token);

                           // gerarDiplomado(token, alunosaDiplomar)
                                   /**********
                                    * Dados a serem enviados para API DDS para gerar diploma do aluno
                                    */

                                    let myHeaders = new Headers();
                                     
                                  
                                    myHeaders.append("Accept", "application/json");
                                    myHeaders.append("Content-Type", "application/json");
                                    myHeaders.append("Authorization", "Bearer "+`${token}`);
                                    
                                    let raw = JSON.stringify(
                                     {
                                         "versao": "1.03",
                                         "codigo_interno": "1234",
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
                                    
                                    let requestOptions = {
                                      method: 'POST',
                                      headers: myHeaders,
                                      body: raw,
                                      redirect: 'follow'
                                    };
 
                                    fetch("https://diploma.solis.com.br/api/diploma-digital/gerar", requestOptions)
                                        .then(response => response.json())
                                        .then(res => {
                                          console.log(res)
                                            $("#mod_sel").html('Dados recebidos com sucesso! <br/>' + res + '<br/>');
                                            
                                          })
                                        .catch(error => console.log('error', error));