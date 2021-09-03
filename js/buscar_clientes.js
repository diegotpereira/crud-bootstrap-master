// $(document).ready(function() {
//     (function() {
//         $.ajax({
//             type: "GET",
//             url: "http://localhost:8080/api/cliente/buscarTodosClientes",
//             success: function(response) {
//                 $.each(response.clientes, (i, cliente) => {

//                     let deleteButton = '<button ' +
//                         'id = ' +
//                         '\"' + 'btn_delete_' + cliente.id + '\"' +
//                         'type = "button" class="btn btn-danger btn_delete" data-toggle = "modal" data-target="#delete-modal"' +
//                         '>&times</button>';

//                     let get_More_Info_Btn = '<button' +
//                         ' id=' + '\"' + 'btn_id_' + cliente.id + '\"' +
//                         ' type="button" class="btn btn-info btn_id">' +
//                         cliente.id +
//                         '</button>';

//                     let tr_id = 'tr_' + cliente.id;

//                     let clienteLinha = '<tr id = \"' + tr_id + "\"" + '>' +
//                         '<td>' + get_More_Info_Btn + '</td>' +
//                         '<td class = \"td_nome\">' + cliente.nome.toUpperCase() + '</td>' +
//                         '<td class = \"td_sobrenome\">' + cliente.sobrenome.toUpperCase() + '</td>' +
//                         '<td class = \"td_endereco\">' + cliente.endereco.toUpperCase() + '</td>' +
//                         '<td class = \"td_endereco\">' + cliente.idade + '</td>' +
//                         '<td class = \"td_endereco\">' + cliente.ativo + '</td>' +
//                         '<td>' + deleteButton + '</td>' +
//                         '</tr>';

//                     $('#clienteTabela tbody').append(clienteLinha);
//                 });
//             },

//             error: function(e) {
//                 alert("Erro: ", e);
//                 console.log("Erro: ", e);
//             }
//         });
//     })();
//     (function() {
//         let pathname = window.location.pathname;
//         if (pathname == "/index.html") {
//             $(".nav .nav-item a:last").addClass("active");
//         }
//     })();
// });

function carregarTabela() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8080/api/cliente/buscarTodosClientes");
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            const tbClientes = JSON.parse(this.responseText);
            if (tbClientes == null)
                tbClientes = [];
            // tbClientes = JSON.parse(this.responseText);
        }
    };
}

carregarTabela();



function Adicionar() {
    var cliente = JSON.stringify({
        Codigo: $("#nome").val(),
        Nome: $("#txtNome").val(),
        Telefone: $("#txtTelefone").val(),
        Email: $("#txtEmail").val()
    });
    tbClientes.push(cliente);
    // localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
    alert("Registro adicionado.");
    return true;
}