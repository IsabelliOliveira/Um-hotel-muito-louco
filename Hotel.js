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

			var escolha = parseInt(prompt('Selecione uma opção 1.) Reserva de Quartos 2.) Cadastro de Hóspedes 3.) Abastecimento de Carros 4.) Evento 5.) Sair'));

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
			inicio();
		}

        function evento(){
            
        }

		function erro() {
			alert('Por favor, informe um número entre 1 e 4');
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