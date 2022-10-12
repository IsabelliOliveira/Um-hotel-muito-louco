/* Voce aluno do Gabriel vendo este repositorio me de uma estrelinha por favor, gratidão */    


      var hotel ="";
    var nome ="";
       
       function bemVindo(){
        hotel= prompt("Qual o nome do hotel?");

        alert(" O nome do Hotel é " + hotel);
        login();
        }
        
        function login(){
        
        nome = prompt("Olá! para iniciarmos por favor digite seu nome.");
        var senha = parseFloat(prompt("Bem vindo! " + nome + " or favor insira sua senha" ));
        
        if(senha == "2678"){
            inicio();
        }  else{
            alert("Senha incorreta! tente novamente");
            login();}
        }

		function inicio() {

            alert("Bem vindo ao Hotel " + hotel + ", " + nome + ". É um imenso prazer ter você por aqui!" );

			var escolha = parseInt(prompt('Selecione uma opção \n 1.) Reserva de Quartos \n 2.) Cadastro de Hóspedes \n 3.) Abastecimento de Carros \n 4.) Evento \n 5.) Sair'));

            switch(escolha) {

                case 1: 
                    reserva_quartos();
                break;
                case 2: 
                    cadastro_hospedes();
                break;
                case 3: 
                    abastecer_carros();
                break;
                case 4: 
                    evento();
                break;
                case 5: 
                    sair();
                break;
                default:
                    erro();
                break; 
            }    
		}		

		function reserva_quartos() {
			alert('HOTEL ' + hotel + ' - RESERVA DE QUARTOS');

            var vdp = parseFloat(prompt("Qual o valor padrão da diária?"));


            if(vdp <= 0){
                alert("Valor inválido," + nome );
            } else {
                var diaria = parseFloat(prompt("Quantas diárias serão necessárias?"));
                var valorpd = vdp * diaria;

                alert("O valor de " + diaria + " dias de hospedagem é de " + valorpd);
            }

                var nomeh = prompt("Qual o nome do hóspede?");
        
                var confirm = prompt(nome + " você confirma a hospedagem para " + nomeh + " por" + diaria + " dias? S/N");
            
            if(confirm === "S"){
                alert( nome + " ,reserva efetuada para " + nomeh + ". O valor total é de" + valorpd );
            } else if (confirm ===  "N"){
                alert( nome + ", reserva não efetuada");
            }

			inicio();
		}

		function cadastro_hospedes() {
			alert('HOTEL ' + hotel + ' - CADASTRO DE HÓSPEDES');

            var lista_hospedes = [];
			
			function sistema_cadastrar_hospedes() {

				var escolha_hospedes = parseInt(prompt('Cadastro de Hóspedes\n\n Selecione uma opção: \n1. Cadastrar \n2. Pesquisar \n3. Sair'));

				if (escolha_hospedes === 1) {
					cadastrar_hospedes();
				} else if (escolha_hospedes === 2) {
					pesquisar_hospedes();
				} else if (escolha_hospedes === 3) {
					retorno();
				} else {
					erro_pesquisar_hospedes();
				}
			}
			
			function cadastrar_hospedes() {

                if (lista_hospedes.length >= 15){
					alert("Numero máximo de hóspedes cadastrados.");
				} else {	
					var nome_hospede = prompt('Por favor, informe o nome do hóspede:');
                    var idade_hospede = prompt("Qual a idade do Hóspede?")

                    lista_hospedes.push(nome_hospede);
					console.log(lista_hospedes);

                    if(idade_hospede <= 6){
                        alert( nome_hospede + " cadastrada(o) com sucesso. " + nome_hospede + " possui gratuidade");
                    } else if (idade_hospede >= 60 ) {
                        alert( nome_hospede + " cadastrada(o) com sucesso. " + nome_hospede + " paga meia");
                    } else {alert("Sucesso! Hóspede " + nome_hospede + " foi cadastrado com sucesso!\n");} 
                    
				}
				
				sistema_cadastrar_hospedes();
			}
			
			function pesquisar_hospedes() {
				var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede para pesquisa:');

                if (lista_hospedes.includes(nome_hospede)){
					alert(nome_hospede + ' encontrada(o).')
				} else {
					alert(nome_hospede + ' não foi encontrada(o).')
				}
				
				sistema_cadastrar_hospedes() 
			}

            function retorno(){
                var retorno = prompt("Se voce deseja volta ao MENU INCIAL digite 1 caso queria volta a tela de cadastro de hospedes digite 2")

                if(retorno === 1 ){
                    inicio();
                }else if(retorno === 2){
                    sistema_cadastrar_hospedes()
                }
            }
			
			function erro_pesquisar_hospedes(){
				alert('Por favor, informe um número entre 1 e 3');

				sistema_cadastrar_hospedes();
			}
			
			sistema_cadastrar_hospedes();

           /* var vdp1 = prompt(parseFloat("Qual o valor padrão da diária?"));
            var nomeh1  = prompt("Qual o nome do hóspede?")
            var idadeh1  = prompt("Qual a idade do Hóspede?")

            lista_hospedes.push(nomeh1);
            console.log(lista_hospedes);

            if(idadeh1 >= 6){
                alert( nomeh1 + " cadastrada(o) com sucesso." + nomeh1 + "possui gratuidade");
            } else if (idadeh1 >= 60 ) {
                alert( nomeh1 + " cadastrada(o) com sucesso." + nomeh1 + "paga meia");
            }

            if(nome == PARE){

                alert( nome + ", o total de hospedagens é:" )
            }


            alert( nomeh1 + " cadastrada(o) com sucesso.");*/

			inicio();
		}

		function abastecer_carros() {
			alert('HOTEL ' + hotel + ' - ABASTECER');
		
            var alcoolW = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
			var gasolinaW = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
			var alcoolS = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
			var gasolinaS = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));

            var diferenca = 0;

            if(alcoolW < alcoolS && gasolinaW < gasolinaS){
                if(alcoolW < gasolinaW){
                    diferenca = (alcoolW * 100)/gasolinaW;
                    if(diferenca <= 70){
                        alert(nome + ", é mais barato abastecer com álcool no Wayne Oil.");
                    }else{
                        alert(nome + ", é mais barato abastecer com gasolina no Wayne Oil.");
                    }
                }else{
                    alert(nome + ", é mais barato abastecer com gasolina no Wayne Oil.");
                }
            }else if(alcoolS < alcoolW && gasolinaS < gasolinaW){
                if(alcoolS < gasolinaS){
                    diferenca = (alcoolS * 100)/gasolinaS;
                    if(diferenca <= 70){
                        alert(nome + ", é mais barato abastecer com álcool no Stark Petrol.");
                    }else{
                        alert(nome + ", é mais barato abastecer com gasolina no Stark Petrol.");
                    }
                }else{
                    alert(nome + ", é mais barato abastecer com gasolina no Stark Petrol.");
                }
            }else{
                if(alcoolW < gasolinaS){
                    diferenca = (alcoolW * 100)/gasolinaS;
                    if(diferenca <= 70){
                        alert(nome + ", é mais barato abastecer com álcool no Wayne Oil.");
                    }else{
                        alert(nome + ", é mais barato abastecer com gasolina no Stark Petrol.");
                    }
                }else if(alcoolS < gasolinaW){
                    diferenca = (alcoolS * 100)/gasolinaW;
                    if(diferenca <= 70){
                        alert(nome + ", é mais barato abastecer com álcool no Stark Petrol.");
                    }else{
                        alert(nome + ", é mais barato abastecer com gasolina no Wayne Oil.");
                    }
                }
            }
            inicio()

		}

//Inicio do Evento 

        function evento(){

            alert('HOTEL ' + hotel + ' - EVENTO')

				var escolha_hospedes = parseInt(prompt('Cadastro do Evento\n\n Selecione uma opção: \n1. Contratação de garçons \n2. Contratação de Buffet \n3. Escolha de Auditório \n4. Horario do Evento \n5. Sair'));

				if (escolha_hospedes === 1) {
					contratação_de_garçons();
				} else if (escolha_hospedes === 2) {
					contratação_de_Buffet();
				} else if (escolha_hospedes === 3) {
					escolha_de_auditório();
				}else if (escolha_hospedes === 4) {
					horario_evento();
				}else if (escolha_hospedes === 5) {
					retorno();
				} else {
					erro_cadastro_evento();
				}
			

        function contratação_de_garçons(){
            var duração_evento = prompt("Qual a duração do evento em horas?")
            var numero_garçons = prompt("Quantos garçons serão necessários?")
            var vph_garçom = 10.50
            var custo_do_evento = numero_garçons * vph_garçom * duração_evento

            alert("Custo total: R$ " + custo_do_evento)
        
            var confirma = confirm("Gostaria de efetuar a reserva?");

        if (confirma) {
            alert(nome + " reserva efetuada com sucesso.");
            evento();
        } else {
            evento();
            }
        }

        function contratação_de_Buffet(){

            var convidados = parseFloat(prompt("Qual o número de convidados para o evento?"));
            var valor_cafe = 0.80;
            var valor_agua = 0.40;
            var valor_salgados = 0.34;

            var cafe_pp = convidados * 0.20;
            var agua_pp = convidados * 0.50;
            var salgados_pp = convidados * 7;

            var custo_total = (cafe_pp * valor_cafe) + (agua_pp * valor_agua) + (salgados_pp * valor_salgados);

            if(convidados > 350){
                alert("Quantidade de convidados superior à capacidade máxima.");
                contratação_de_Buffet();
            } else{
                alert("O evento precisará de " + cafe_pp + " litros de café, " + agua_pp + " litros de água, " + salgados_pp + " salgados. O custo total do evento será de R$ " + custo_total );
            }

            var confirma = prompt("Gostaria de efetuar a reserva? S/N");

            if (confirma == "s") {
                alert(nome + " , reserva efetuada com sucesso.");
                evento();
            } else if (confirma == "n"){
                alert(nome + " , reserva não realizada");
                evento();
                }
            
        }   

        function escolha_de_auditório(){
            var auditório_laranja = 150
            var auditório_colorado = 350
            var convidados = prompt("Qual o número de convidados para o seu evento?");

            if(convidados > auditório_colorado ){
                alert("Quantidade de convidados superior à capacidade máxima");
                escolha_de_auditório()
            } else if( convidados > 220 ){
                alert("Use o auditório Colorado");
            }else if( convidados < auditório_laranja ){
                alert("Use o auditório Laranja");
            }else if( convidados > auditório_laranja < 220){
                alert("Use o auditório Laranja (inclua mais " + (convidados - auditório_laranja)   + " cadeiras)");
            }
            var confirma = prompt("Gostaria de efetuar a reserva? S/N");

            if (confirma == "s") {
                alert(nome + " , reserva efetuada com sucesso.");
                evento();
            } else if (confirma == "n"){
                alert(nome + " , reserva não realizada");
                evento();
            }
        }

        function horario_evento(){

            var dia = prompt("Qual o dia do seu evento?").toLowerCase();
            var hora = prompt("Qual a hora do seu evento?");

            if(dia == "segunda" || dia == "terça" || dia =="quarta" || dia =="quinta" || dia =="sexta" && hora >=7 && hora <23){
                var nome_da_empresa =  prompt("Qual o nome da empresa?");
                alert("Restaurante reservado para " + nome_da_empresa + ". " + dia + " ás " + hora + "hs.")
                 evento() 
            }else if(dia == "sabado" || dia == "domingo" && hora >=7 && hora <15){
                var nome_da_empresa =  prompt("Qual o nome da empresa?");
                alert("Restaurante reservado para " + nome_da_empresa + ". " + dia + " ás " + hora + "hs.")
                 evento() 
            }else {
                alert("Restaurante indisponível")
                horario_evento()
            }
            
        }
        
        function retorno(){
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
                inicio();
			} else {
				evento();
			}
        }

        function erro_cadastro_evento(){
            alert('Por favor, informe um número entre 1 e 4');

            evento();
        
        }
        }

//Fim do Evento 

		function erro() {
			alert('Por favor, informe um número entre 1 e 5');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
                alert("Muito obrigado e até logo, " + nome)
				window.close();
			} else {
				inicio();
			}
		}

		
		
		bemVindo();
