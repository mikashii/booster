A interface que é construída com React, é criada a partir de javascript, não existe nenhum conteúdo HTML sendo exibido diretamente do código fonte.
O conteúdo da página é exibido a partir do momento que o site já carregou.

---

Conceito de propriedade

Propriedades no React são como atributos do HTML.

``<input type="text">``

---

Type é um atributo da tag *input*

``const Header: React.FC = () => {}``

**React.FC**
É um "generic" dentro do Typescript que pode receber um parâmetro informando quais propriedades um componente pode receber.

*Interface*: É uma forma de definir a tipagem de objeto.

# State

```
 function App() {
  const [counter, setCounter] = useState(0)
    function handleButtonClick(){
      setCounter(counter + 1)      
    }

  return (
    <div className="App">
      <Header title={`Contador é igual a: ${counter}`}/>
      <p>{counter}</p>
      <p>{counter * 3}</p>
      <p>Você clicou {counter} vezes</p>
      <button onClick={handleButtonClick}>Contar</button>
    </div>
  );
}
```








