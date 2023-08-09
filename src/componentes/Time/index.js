import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  const borderColor = { borderColor: props.corPrimaria };

  return (
    // pode usar o ternario "?" ":" ou && (serve como um verificador)
    // caso seja true então faça o a seguir.
    (props.colaboradores.length > 0) && <section className="time" style={css}>
      <h3 style={borderColor}>{props.nome}</h3>

      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={props.corPrimaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  );
};

export default Time;
