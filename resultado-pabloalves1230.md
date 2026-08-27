Data de atualização: Dia 27/8/2026 às 11:42 

| Questão | Teste | Entregue | Correto | Mensagem de Erro |
|---------|-------|----------|---------|------------------|
| AtvDivisoria | renderiza o componente com largura total de 90vw | ✅ | ✅ | Sem erros |
| AtvDivisoria | renderiza o componente com alinhamento interno horizontal | ✅ | ✅ | Sem erros |
| AtvDivisoria | renderiza o componente da esquerda com a largura atribuída ao atributo "largura" | ✅ | ❌ | TypeError: Cannot read properties of undefined (reading 'flex') |
| AtvDivisoria | renderiza o componente da direita a largura restante do componente raiz | ✅ | ❌ | TypeError: Cannot read properties of undefined (reading 'flex') |
| AtvBotaoAcaoExterna | deve renderizar o texto "Clique abaixo" | ✅ | ❌ | Error: Unable to find an element with text: Clique abaixo |
| AtvBotaoAcaoExterna | deve renderizar o botão com o texto "Clique aqui" | ✅ | ❌ | Error: Unable to find an element with text: Clique aqui |
| AtvBotaoAcaoExterna | deve executar a função comando quando o botão for pressionado | ✅ | ❌ | Error: Unable to find an element with text: Clique aqui |
| AtvBotaoAcaoExterna | deve executar a função comando múltiplas vezes quando pressionado várias vezes | ✅ | ❌ | Error: Unable to find an element with text: Clique aqui |
| AtvParagrafo | renderiza uma View com dois Text internos | ✅ | ✅ | Sem erros |
| AtvParagrafo | O primeiro texto recebe o valor do argumento "titulo" | ✅ | ✅ | Sem erros |
| AtvParagrafo | O primeiro texto tem o tamanho de 32 pixels | ✅ | ✅ | Sem erros |
| AtvParagrafo | O segundo texto recebe o valor do argumento "conteudo" | ✅ | ✅ | Sem erros |
| AtvParagrafo | O segundo texto tem o tamanho de 16 pixels | ✅ | ✅ | Sem erros |
| AtvBotaoAcaoInterna | deve renderizar o texto "Clique abaixo" | ✅ | ✅ | Sem erros |
| AtvBotaoAcaoInterna | deve renderizar o Pressable com o texto "Clique aqui" | ✅ | ✅ | Sem erros |
| AtvBotaoAcaoInterna | deve exibir um alerta com o texto "Fui clicado!" ao pressionar o botão | ✅ | ❌ | Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m |
