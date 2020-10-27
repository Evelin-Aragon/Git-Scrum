
function validarVacio(form){

    let input=form.usuario;

    let input2=form.password;

    if(input.value=="" && input2.value==""){

        alert("Los campos no pueden estar vacio ");

        input.focus();
        
        return false;

    }else if( input2.value!="" && input.value==""){

            alert("El campo usuario no puede estar vacio ");

            input.focus();

            return false;

        } 
        else if(input.value!="" && input2.value=="" ){

                alert("El campo password no puede estar vacio ");

                input2.focus();
                
                return false;

                }
            else{

                console.log("Estan completos");

                return true;

            }
}
        

function validarUsuario(form){

        let user= form.usuario.value;

        if(user.indexOf('@',0)==-1){

            alert("El campo es incorrecto. Vuelva a ingresar usuario ");

            user.focus();

            return false;

        }else{
                
            console.log("Usuario ingresado correctamente");

            return true;
        }

}

function validarPasswordExpR(form){
            
    let password=form.password.value;

    let expreg =/^[0-9]{4}$/;

    if(expreg.test(password)){

        console.log("La password se ingreso correctamente"); 

        return true;

    }else{

        alert("El campo password debe contener unicamente 4 numeros");

        return false; 
    }

}
