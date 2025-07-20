import './Beneficios.sass'

const Beneficios = () => {
    return (
        <section className="benefits" id="benefits">
            <div className="container">
                <h2 className="section-title">Beneficios de trabajar con Vendrix</h2>
                <div className="benefits-container">
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <i className="fas fa-truck"></i>
                        </div>
                        <h3>Entrega rápida</h3>
                        <p>Recibe tus productos en 24-72 horas hábiles</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <i className="fas fa-headset"></i>
                        </div>
                        <h3>Soporte B2B</h3>
                        <p>Atención personalizada para empresas</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <i className="fas fa-file-invoice"></i>
                        </div>
                        <h3>Cálidad Siempre</h3>
                        <p>Cuidado y eficiencia en los pedidos</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Beneficios