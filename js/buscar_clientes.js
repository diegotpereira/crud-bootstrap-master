function carregarTabela() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:8080/api/cliente/buscarTodosClientes");
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var trHTML = '';
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                trHTML += '<tr>';
                trHTML += '<td>' + object['id'] + '</td>';
                trHTML += '<td><img width="50px" src="' + object['imageURL'] + '" class="imageURL"></td>';
                trHTML += '<td>' + object['nome'] + '</td>';
                trHTML += '<td>' + object['sobrenome'] + '</td>';
                trHTML += '<td>' + object['usuarionome'] + '</td>';
                trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="mostrarCaixaEdicaoUsuario(' + object['id'] + ')">Editar</button>';
                trHTML += '<button type="button" class="btn btn-outline-danger" onclick="deletarUsuario(' + object['id'] + ')">Excluir</button></td>';
                trHTML += "</tr>";
            }
            document.getElementById("minhaTabela").innerHTML = trHTML;
        }
    };
}

carregarTabela();