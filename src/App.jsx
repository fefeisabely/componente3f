import Botao from "./componentes/Botao"
import Caixa from "./componentes/Caixa"
import Etiqueta from "./componentes/Etiqueta"

const App = ()=> {

  return (
    <>
      <h3>Mamae te amo</h3>
      <Etiqueta texto="voce é muito linda" />
      <Etiqueta texto="Mamãe, que Deus abençoe sua vida
És a rosa mais linda do meu jardim" />
      <Etiqueta />
      <Caixa />
      <Botao />
    </>
  )
}

export default App
