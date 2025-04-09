import Botao from "./componentes/Botao"
import Caixa from "./componentes/Caixa"
import Etiqueta from "./componentes/Etiqueta"

const App = ()=> {

  return (
    <>
      <h3>Mamae te amo</h3>
      <Etiqueta texto="voce é muito linda" />
      <Etiqueta texto="mamaMãe, sou grata por tudo que fez por mim
Cada gesto de carinho que recebi
Nunca vou esquecer, como eu amo você
Tantas alegrias nós iremos viver

Mamãe, que Deus abençoe sua vida
És a rosa mais linda do meu jardim
Mamãe, que Deus abençoe sua vida
És a rosa mais linda do meu jardim

Mãe, sou grata por tudo que fez por mim
Cada gesto de carinho que recebi
Nunca vou esquecer, como eu amo você
Tantas alegrias nós iremos viver

Mamãe, que Deus abençoe sua vida
És a rosa mais linda do meu jardim
Mamãe, que Deus abençoe sua vida
És a rosa mais linda do meu jardim

Mamãe, que Deus abençoe sua vida
És a rosa mais linda do meu jardim" />
      <Etiqueta />
      <Caixa />
      <Botao />
    </>
  )
}

export default App
