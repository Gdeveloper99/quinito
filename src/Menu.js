import React from 'react';
import Swal from 'sweetalert2'
import './Menu.css'
class Menu extends React.Component{
    alpinchar=()=>{
        this.props.cambioDeRuta('juego');
    }
    normas=()=>{
        Swal.fire({
            icon: 'info',
            title: 'Normas',
            confirmButtonColor:  'rgba(27, 27, 27, 0.5)',
            outline:'none',
            border:'none',
            text: 'Si no sabes jugar espabila, a ver si voy a tener que estar aqui gastando tiempo en explicarte como se juega, pringao',
            footer: 'Salud!!'
          })
    }
    render(){
        return (
            

            <div className='Principal'>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
                </style>
                <div className='container '>
                
                <div className='Principal'>
                <h1 className='Titulo'>Quinito</h1>
                    <button className='boton br4' onClick={this.normas}>NORMAS</button>
                    <button className='boton br4' onClick={this.alpinchar}>JUGAR!</button>
                </div>
                </div>
    
            </div>
        );
    }
    
}

export default Menu;