import './thanks.sass'

const Thanks = () => {



    return (
        <div className='container-thanks'>
            <h1>¡Gracias por comunicarte a Vendrix!</h1>
            <p>El formulario ha sido enviado con èxito.</p>
            <button type="submit" className="btn btn-accent-form" onClick={() => window.location.href = "/home"}>
                Regresar a Vendrix
            </button>
        </div>
    );
};

export default Thanks;