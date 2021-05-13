
import React from 'react'
import './Dado.css'
class Dado extends React.Component {
    constructor() {
        super();
        this.state = {
            cara: ''
        }
    }

    actualizar = (numero) => {
        this.setState({ cara: numero })
    }
    random1 = () => {

        let valor = Math.floor(Math.random() * 6) + 1
        let valor2 = valor.toString();
        this.setState({ cara: valor2 })



    }
    random = () => {
        this.setState({ cara: '7' })
        setTimeout(() => {
            this.random2()
        }, 600);

    }
    random2 = () => {
        this.setState({ cara: '8' })

        setTimeout(() => {
            this.random3();
        }, 600);

    }
    random3 = () => {
        this.setState({ cara: '9' })

        setTimeout(() => {
            this.random1();
        }, 700);

    }

    render() {


        switch (this.state.cara) {
            case '1':
                return (
                    <div className='container'>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap');
                        </style>
                        <div className='instruccion f1 reverse'>
                            <h1>Todos</h1>
                        </div>
                        <div className="cara-1" onClick={this.random}>
                            <div className="punto"></div>
                        </div>
                        <div className='instruccion f1'>
                            <h1>Todos</h1>
                        </div>
                    </div>


                )
            case '2':
                return (
                    <div className='container'>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap');
                        </style>
                        <div className='instruccion f1 reverse'>
                            <h1>Pares</h1>
                        </div>
                        <div className="cara-2" onClick={this.random}>
                            <div className="punto"></div>
                            <div className="punto"></div>
                        </div>
                        <div className='instruccion f1'>
                            <h1>Pares</h1>
                        </div>
                    </div>
                )
            case '3':
                return (
                    <div className='container'>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap');
                        </style>
                        <div className='instruccion f1 reverse'>
                            <h1>Impares</h1>
                        </div>
                        <div className="cara-3" onClick={this.random}>
                            <div className="punto"></div>
                            <div className="punto"></div>
                            <div className="punto"></div>
                        </div>
                        <div className='instruccion f1'>
                            <h1>Impares</h1>
                        </div>
                    </div>
                )
            case '4':
                return (
                    <div className='container'>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap');
                        </style>
                        <div className='instruccion f1 reverse'>
                            <h1>¡ELIGES!</h1>
                        </div>
                        <div className="cara-4" onClick={this.random}>
                            <div className="columna">
                                <div className="punto"></div>
                                <div className="punto"></div>
                            </div>
                            <div className="columna">
                                <div className="punto"></div>
                                <div className="punto"></div>
                            </div>
                        </div>
                        <div className='instruccion f1'>
                            <h1>¡ELIGES!</h1>
                        </div>
                    </div>
                )
            case '5':
                return (
                    <div className='container'>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap');
                        </style>
                        <div className='instruccion f1 reverse'>
                            <h1>Izquierda</h1>
                        </div>
                        <div className="cara-5" onClick={this.random}>
                            <div className="columna">
                                <div className="punto"></div>
                                <div className="punto"></div>
                            </div>
                            <div className="punto medio"></div>
                            <div className="columna">
                                <div className="punto"></div>
                                <div className="punto"></div>
                            </div>
                        </div>
                        <div className='instruccion f1'>
                            <h1>Izquierda</h1>
                        </div>
                    </div>
                )
            case '6':
                return (
                    <div className='container1'>


                        <div className='container'>
                            <style>
                                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap');
                            </style>
                            <div className='instruccion f1 reverse'>
                                <h1>Derecha</h1>
                            </div>
                            <div className="cara-6" onClick={this.random}>
                                <div className="columna">
                                    <div className="punto"></div>
                                    <div className="punto"></div>
                                    <div className="punto"></div>
                                </div>
                                <div className="columna">
                                    <div className="punto"></div>
                                    <div className="punto"></div>
                                    <div className="punto"></div>
                                </div>
                            </div>
                            <div className='instruccion f1'>
                                <h1>Derecha</h1>
                            </div>
                        </div>
                    </div>
                )
            case '7':
                return (
                    <div className='container1'>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap');
                        </style>
                        <div className='cara-7'>
                            <h1>1</h1>
                        </div>

                    </div>
                )
            case '8':
                return (
                    <div className='container1'>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap');
                        </style>
                        <div className='cara-7'>
                            <h1>2</h1>
                        </div>

                    </div>
                )
            case '9':
                return (
                    <div className='container1'>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap');
                        </style>
                        <div className='cara-7'>
                            <h1>3</h1>
                        </div>

                    </div>
                )
            default:
                return (

                    <div className='container'>
                        <style>
                            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100&display=swap');
                        </style>

                        <div className="cara-1" onClick={this.random}>
                            <div className="punto"></div>
                        </div>

                    </div>

                )
        }

    }


}
export default Dado;










