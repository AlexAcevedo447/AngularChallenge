import Swal from 'sweetalert2';

export const loginError = ()=>{
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario o contraseña son incorrectos'
    })
}