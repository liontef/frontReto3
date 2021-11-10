//Audience

function traerInformacion(){
    $.ajax({
        url:"http://132.226.40.238:8080/api/Audience/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta)
        }

    });
}

function pintarRespuesta(respuesta){
    
    let myTable ="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>"
        myTable+="<td>"+respuesta[i].id+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].owner+"</td>";
        myTable+="<td>"+respuesta[i].capacity+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";        
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        name:$("#name").val(),
        owner:$("#owner").val(),
        capacity:$("#capacity").val(),
        description:$("#description").val(),
        
    };
    
    $.ajax({
        url:"http://132.226.40.238:8080/api/Audience/save",
        type:"POST",
        contentType: "application/json; charset=utf-8",
        data:JSON.stringify(myData),
        datatype:"JSON",
        success:function(respuesta){
            console.log("Se guardó correctamente");
            alert("Se guardó correctamente");
            window.location.reload() 
        },
        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se guardó correctamente")
        }
    });
}

//Categorias

function traerCategoria(){
    $.ajax({
        url:"http://132.226.40.238:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarCategoria(respuesta)
        }

    });
}

function pintarCategoria(respuesta){
    
    let myTable ="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>"
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+respuesta[i].idCategoria+")'>Borrar</button>";
        myTable+="</tr>";        
    }
    myTable+="</table>";
    $("#resultadoCategoria").append(myTable);
}

function guardarCategoria(){
    let myDataC={
        name:$("#nameCat").val(),
        description:$("#descriptionCat").val(),
    };
    
    $.ajax({
        url:"http://132.226.40.238:8080/api/Category/save",
        type:"POST",
        contentType: "application/json; charset=utf-8",
        data:JSON.stringify(myDataC),
        datatype:"JSON",
        success:function(respuesta){
            console.log("Se guardó correctamente");
            alert("Se guardó correctamente");
            window.location.reload() 
        },
        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se guardó correctamente")
        }
    });
}


//Cliente
function traerCliente(){
    $.ajax({
        url:"http://132.226.40.238:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarCliente(respuesta)
        }
    });
}


function pintarCliente(respuesta){
    
    let myTable ="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>"
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="<td> <button onclick='borrarCliente("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";        
    }
    myTable+="</table>";
    $("#resultadoCliente").append(myTable);
}

function guardarCliente(){
    let myDataClt={
        name:$("#nameCliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    
    $.ajax({
        url:"http://132.226.40.238:8080/api/Client/save",
        type:"POST",
        contentType: "application/json; charset=utf-8",
        data:JSON.stringify(myDataClt),
        datatype:"JSON",
        success:function(respuesta){
            console.log("Se guardó correctamente");
            alert("Se guardó correctamente");
            window.location.reload() 
        },
        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se guardó correctamente")
        }
    });
}

//Mensaje
function traerMensaje(){
    $.ajax({
        url:"http://132.226.40.238:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarMensaje(respuesta)
        }
    });
}

function pintarMensaje(respuesta){
    
    let myTable ="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>"
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td> <button onclick='borrarMensaje("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";        
    }
    myTable+="</table>";
    $("#resultadoMensaje").append(myTable);
}


function guardarMensaje(){
    let myDataM={
        messageText:$("#messageText").val(),
    };
    
    $.ajax({
        url:"http://132.226.40.238:8080/api/Message/save",
        type:"POST",
        contentType: "application/json; charset=utf-8",
        data:JSON.stringify(myDataM),
        datatype:"JSON",
        success:function(respuesta){
            console.log("Se guardó correctamente");
            alert("Se guardó correctamente");
            window.location.reload() 
        },
        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se guardó correctamente")
        }
    });
}

//Reservas
function traerReserva(){
    $.ajax({
        url:"http://132.226.40.238:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarReserva(respuesta)
        }
    });
}


function pintarReserva(respuesta){
    
    let myTable ="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>"
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
        myTable+="<td>"+respuesta[i].status+"</td>";
        myTable+="<td>"+respuesta[i].score+"</td>";
        myTable+="<td> <button onclick='borrarMensaje("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";        
    }
    myTable+="</table>";
    $("#resultadoReserva").append(myTable);
}

function guardarReserva(){
    let myDataR={
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        status:$("#idMenstatussaje").val(),
        score:$("#score").val(),
    };
    
    $.ajax({
        url:"http://132.226.40.238:8080/api/Reservation/save",
        type:"POST",
        contentType: "application/json; charset=utf-8",
        data:JSON.stringify(myDataR),
        datatype:"JSON",
        success:function(respuesta){
            console.log("Se guardó correctamente");
            alert("Se guardó correctamente");
            window.location.reload() 
        },
        error: function(jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se guardó correctamente")
        }
    });
}




