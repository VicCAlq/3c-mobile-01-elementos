Data de atualização: Dia 27/8/2026 às 11:40 

| Questão | Teste | Entregue | Correto | Mensagem de Erro |
|---------|-------|----------|---------|------------------|
| AtvParagrafo | renderiza uma View com dois Text internos | ✅ | ✅ | Sem erros |
| AtvParagrafo | O primeiro texto recebe o valor do argumento "titulo" | ✅ | ❌ | Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m |
| AtvParagrafo | O primeiro texto tem o tamanho de 32 pixels | ✅ | ✅ | Sem erros |
| AtvParagrafo | O segundo texto recebe o valor do argumento "conteudo" | ✅ | ❌ | Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoEqual[2m([22m[32mexpected[39m[2m) // deep equality[22m |
| AtvParagrafo | O segundo texto tem o tamanho de 16 pixels | ✅ | ❌ | Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m |
| AtvDivisoria | renderiza o componente com largura total de 90vw | ✅ | ❌ | Error: Invariant Violation: Text strings must be rendered within a <Text> component. Detected attempt to render " " string within a <View> component. |
| AtvDivisoria | renderiza o componente com alinhamento interno horizontal | ✅ | ❌ | Error: Invariant Violation: Text strings must be rendered within a <Text> component. Detected attempt to render " " string within a <View> component. |
| AtvDivisoria | renderiza o componente da esquerda com a largura atribuída ao atributo "largura" | ✅ | ❌ | Error: Invariant Violation: Text strings must be rendered within a <Text> component. Detected attempt to render " " string within a <View> component. |
| AtvDivisoria | renderiza o componente da direita a largura restante do componente raiz | ✅ | ❌ | Error: Invariant Violation: Text strings must be rendered within a <Text> component. Detected attempt to render " " string within a <View> component. |
| AtvBotaoAcaoInterna | deve renderizar o texto "Clique abaixo" | ✅ | ✅ | Sem erros |
| AtvBotaoAcaoInterna | deve renderizar o Pressable com o texto "Clique aqui" | ✅ | ✅ | Sem erros |
| AtvBotaoAcaoInterna | deve exibir um alerta com o texto "Fui clicado!" ao pressionar o botão | ✅ | ✅ | Sem erros |
| AtvBotaoAcaoExterna | deve renderizar o texto "Clique abaixo" | ✅ | ❌ | TypeError: Cannot read properties of undefined (reading 'ten') |
| AtvBotaoAcaoExterna | deve renderizar o botão com o texto "Clique aqui" | ✅ | ❌ | TypeError: Cannot read properties of undefined (reading 'ten') |
| AtvBotaoAcaoExterna | deve executar a função comando quando o botão for pressionado | ✅ | ❌ | TypeError: Cannot read properties of undefined (reading 'ten') |
| AtvBotaoAcaoExterna | deve executar a função comando múltiplas vezes quando pressionado várias vezes | ✅ | ❌ | TypeError: Cannot read properties of undefined (reading 'ten') |
