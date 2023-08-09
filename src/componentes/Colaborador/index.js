import './Colaborador.css'

const Colaborador = (props) => {

    return(
        <div className='colaborador'>
            {/* imagem e cor de fundo */}
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
        <img src={props.imagem} alt={props.nome}/>
            </div>
            {/* nome e o cargo */}
            <div className='rodape'>
            <h4>{props.nome}</h4>
            <h5>{props.cargo}</h5>

            </div>

        </div>
    )
}

export default Colaborador 