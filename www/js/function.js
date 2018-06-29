$(function () {
  var operation = "C"; 
  var selected_index = -1; 
  var tblPersons = localStorage.getItem("tblPersons"); 
  tblPersons = JSON.parse(tblPersons); 
  if (tblPersons === null) 
      tblPersons = [];

  function Create() {
    
    var person = JSON.stringify({
      ID: $("#txtID").val(),
      Titulo: $("#txtTitulo").val(),
      Editora: $("#txtEditora").val(),
      Sinop: $("#txtSinop").val()
    }); 
   
    tblPersons.push(person);
    //Almacenar los datos en el Local Storage
    localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
    alert("Informações Inseridas no sistema"); //Mensaje de alerta
    return true;
  }

  function Edit() {
    // Editar el item seleccionado en la tabla
    tblPersons[selected_index] = JSON.stringify({
        ID: $("#txtID").val(),
      Titulo: $("#txtTitulo").val(),
      Editora: $("#txtEditora").val(),
      Sinop: $("#txtSinop").val()
    });
    //Almacenar los datos en el Local Storage
    localStorage.setItem("tblPersons", JSON.stringify(tblPersons)); 
    alert("Informações Editadas no sistema"); //Mensaje de alerta
    return true;
  }

  function Delete() {
    //Eliminar el elemento seleccionado en la tabla
    tblPersons.splice(selected_index, 1); 
    //Actualizar los datos del Local Storage
    localStorage.setItem("tblPersons", JSON.stringify(tblPersons)); 
    alert("Cadastro eliminado"); //Mensaje de alerta
  }

  function List() {
    $("#tblList").html("");
    $("#tblList").html(
            "<thead>" +
            "<tr>" +                
            "<th>ID</th>" +
            "<th>Titulo</th>" +
            "<th>Editora</th>" +
            "<th>Sinopse</th>" +
            "<th>Ação</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            "</tbody>"
            ); //Agregar la tabla a la estructura HTML
    for (var i in tblPersons) {
        var per = JSON.parse(tblPersons[i]);
        $("#tblList tbody").append("<tr>" +                    
                "<td>" + per.ID + "</td>" +
                "<td>" + per.Titulo + "</td>" +
                "<td>" + per.Editora + "</td>" +
                "<td>" + per.Sinop + "</td>" +                    
                "<td><img src='edit.png' alt='Edit" + i + "' class='btnEdit'/>&nbsp &nbsp<img src='delete.png' alt='Delete" + i + "' class='btnDelete'/></td>" +
                "</tr>"
                );
    } //Recorrer y agregar los items a la tabla HTML
  }

  $("#frmPerson").bind("submit", function () {
    if (operation === "C")
        return Create();
    else
        return Edit();
  }); //Función para decidir si se encuentra añadiendo o editando un item
  
  List();

  $(".btnEdit").bind("click", function () {
    operation = "E"; //"E" = Editar
    //Obtener el identificador del item a ser editado
    selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
    // Convertir de JSON al formato adecuando para editarlos datos
    var per = JSON.parse(tblPersons[selected_index]); 
    $("#txtID").val(per.ID);
    $("#txtTitulo").val(per.Titulo);
    $("#txtEditora").val(per.Editora);
    $("#txtEmail").val(per.Sinop);
    $("#txtID").attr("readonly", "readonly");
    $("#txtTitulo").focus();
  });

  $(".btnDelete").bind("click", function () {
    //Obtener el identificador del item a ser eliminado
    selected_index = parseInt($(this).attr("alt").replace("Delete", "")); 
    Delete(); //Eliminar el item
    List(); //Volver a listar los items en la tabla
  });
});

