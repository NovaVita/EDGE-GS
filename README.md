![Texto Alternativo](https://raw.githubusercontent.com/NovaVita/.github/main/logo-cortado-invisivel.png)

# Bem-vindo ao repositório oficial de Edge Computing da NovaVita no GitHub! 🚀

---

## **Quem Somos**

A NovaVita é mais do que uma startup; somos uma comunidade comprometida em transformar a saúde por meio da inovação tecnológica. Nossa missão é facilitar e aprimorar a qualidade de vida das pessoas, oferecendo soluções intuitivas que otimizam agendamento médico e monitoramento de pacientes crônicos.

---

## **Principais Projetos**

1. **NovaVita:** Nosso aplicativo revolucionário simplifica o tratamento médico do paciente, além de realizar de maneira automática o agendamento da consulta médica para o usuário, proporcionando uma experiência fluida e eficiente para profissionais de saúde e pacientes.

2. **Soul:** Desenvolvemos um dispositivo inovador capaz de ler automaticamente os valores das doenças crônicas, como diabetes, permitindo intervenções rápidas para tratamentos mais eficazes.

---

## **Arquétipo do Inocente/Idealista**

Nosso desenvolvimento é guiado pelo arquétipo do Inocente/Idealista. Acreditamos na pureza, confiança, e na busca por uma vida saudável. Cada linha de código reflete nossa paixão em criar um mundo mais saudável e acessível.

---

## **Descrição**

A saúde é uma parte fundamental da vida, e o gerenciamento eficaz de condições médicas, especialmente as crônicas, pode ser desafiador tanto para profissionais de saúde quanto para os próprios pacientes. O agendamento de consultas, o monitoramento preciso do estado de saúde e a adesão consistente a medicamentos são elementos cruciais que muitas vezes enfrentam obstáculos, levando a uma gestão subótima das condições de saúde.

Além disso, em um mundo cada vez mais conectado, há uma demanda crescente por soluções que possam aproveitar a tecnologia para melhorar a eficiência, acessibilidade e personalização dos cuidados de saúde. Nesse cenário, surge a necessidade de uma abordagem inovadora e abrangente para enfrentar os desafios contemporâneos relacionados à saúde.

---

## **Objetivo**

A NovaVita se compromete a impactar positivamente vidas, oferecendo uma abordagem inovadora que prioriza a prevenção, agilidade no tratamento e uma experiência de cuidado centrada no paciente. Esperamos que o NovaVita App e o dispositivo Soul possam beneficiar comunidades inteiras, proporcionando um cuidado de saúde mais eficiente e acessível. A NovaVita está dedicada a contribuir para a saúde global e proporcionar um futuro onde as pessoas possam viver vidas mais saudáveis e conectadas.

---

## **Solução / Diferencial**

A NovaVita se propõe a revolucionar a prestação de cuidados de saúde, abordando as lacunas existentes na gestão de condições médicas e promovendo uma abordagem mais holística e orientada para o paciente. A solução proposta envolve dois elementos principais: o aplicativo NovaVita e o dispositivo de monitoramento Soul.

### **Aplicativo NovaVita:**

O NovaVita App é uma plataforma abrangente que oferece funcionalidades avançadas para pacientes e profissionais de saúde. Ele aborda os seguintes aspectos:

* **Agendamento Automático de Consultas:** Automatiza o processo de agendamento de consultas, proporcionando conveniência tanto para os pacientes quanto para os profissionais de saúde.
* **Monitoramento do Paciente em Tempo Real:** Rastreia e apresenta dados relevantes, permitindo que profissionais de saúde monitorem o progresso dos pacientes e identifiquem rapidamente qualquer agravamento.
* **Gestão de Medicamentos:** Facilita a adesão consistente aos medicamentos, enviando lembretes e monitorando a conformidade para melhorar os resultados do tratamento.
* **Resposta Automática a Agravamentos:** Em caso de agravamento detectado, o aplicativo é capaz de agendar automaticamente uma consulta, proporcionando uma resposta rápida a emergências médicas.

### **Dispositivo Soul:**

O Soul é um dispositivo de monitoramento de saúde que se integra perfeitamente ao aplicativo NovaVita. Suas características incluem:

* **Sensores Avançados:** Infravermelho, batimento cardíaco, pressão arterial e oxigenação do sangue para fornecer uma visão completa do estado de saúde do paciente.
* **Conectividade com o NovaVita App:** Transmite dados em tempo real para o aplicativo, permitindo a criação de gráficos e análises detalhadas do estado de saúde.
* **Monitoramento de Doenças Crônicas:** Especialmente projetado para monitorar condições crônicas, como diabetes, proporcionando uma gestão mais eficaz e personalizada.

---

## **Vídeo**

Você pode assistir ao vídeo mostrando o dispositivo clicando [aqui](https://www.youtube.com/watch?v=-3kvrQLcPUk&t=25s&ab_channel=Tocomaz).

---

## Features Implementadas:

* Botão de Home, Login, Sobre nós, Submit, LogOut e Cadastrar;
* Validação de usuário;
* Responsividade;
* Dashboard;
* JSON-server;
* API.

---

## **Configuração**

`Siga os passos abaixo`:

1. Certifique-se de ter o Node.js instalado em seu sistema antes de começar. Caso ainda não tenha, você pode baixá-lo [aqui](https://nodejs.org/en).
2. Baixe a pasta do repositório com o nome de `edge-site`.
3. Abra a pasta no Visual Studio Code (VSCode).
4. No VSCode, abra o terminal.
5. Execute o comando `npm install` para instalar as dependências necessárias.
6. Após a instalação, rode o comando `npm run dev` para colocar o site no ar.
7. Abra um outro terminal e rode o comando `npm run dados` para colocar o JSON-server no ar (nesse JSON, contém os dados de cadastro dos usuários).
8. Para realizar o `login`, pode-se fazer seu `cadastro` ou usar o seguinte login já existente (`e-mail: a@a.com | senha: 123123123`)

---

## Configuração da API do Site Local

⚠ Atenção: Essa API funcionará com o dispositivo Soul do Wokwi ligado. Caso o dispositivo esteja desligado, ela passará para os dashboards do site os últimos dados lidos.

Para configurar a API do site, `siga os passos abaixo` que contém todas as informações necessárias:

1. Baixe a pasta do repositório com o nome de `edge-api`.
2. Abra a pasta no Visual Studio Code (VSCode).
3. No VSCode, abra o terminal.
4. Execute o comando `npm install` para instalar as dependências necessárias.
5. No terminal do VSCode, execute o comando `node script js`.
6. A API estará agora disponível para acesso em http://localhost:4000.

Vale lembrar, para acessar os dados de um sensor específico, basta digitar as seguintes iniciais seguidas de uma barra (`/`) no fim do `http`, como mostrado no exemplo:
* Exemplo para acessar os dados de temperatura: http://localhost:4000/t
* t: Temperatura
* i: Pressão Arterial (infravermelho)
* b: Batimento Cardíaco
* o: Oxigenação

---

## **Wokwi**

### Observação:

* O sensor infravermelho simula a pressão arterial, mas os valores não correspondem com a pressão de um ser humano real, pois estamos usando a ferramenta que o Wokwi fornece para fazer a simulação do infravermelho.
* Lembre-se também de configurar seu e-mail na linha `23` do código, para que possa receber o e-mail de quando um sensor capta um valor fora do padrão. De preferência, use um e-mail diferente do seu e-mail principal, para evitar que ocorra um spam de e-mails enviados pelo código.
* Ao abrir o protótipo Soul no Wokwi, alguns sensores se encontrarão no valor zerado, como o caso do potenciômetro. Após a inicialização da simulação, altere os valores para que a condição de enviar e-mail não seja ativada.
* O código do protótipo Soul no Wokwi possui a possiblidade de enviar um email para o paciente, ainda que o código de enviar email ainda esteja em sua fase inicial. Para o e-mail ser enviado, os valores dos sensores precisam sair do padrão estabelicido no código, sendo esse padrão: (`Temperatura: menor que 36°C e maior que 38°C`)(`Potenciômetro da esquerda: menor que 60 e maior que 120`)(`Potenciômetro da direita: menor que 90`).
* Ao iniciar a simulação do Wokwi, pode demorar um pouco para inicializar, cerca de `90 segundos`para que ela de fato inicie, portanto não se preocupe se demorar.
* Ao iniciar a simulação do Wokwi, pode acontecer de ocorrer o seguinte erro (`Build server failure: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON`). Mas não se preocupe, pare o start da simulação e recarregue a página, ao fazer esse processo, o site recarregará e aparecerá um botão de `refresh`. Clique no botão e inicie novamente a simulação do Wokwi. Segue imagem abaixo do botão de refresh.

![Texto Alternativo](https://raw.githubusercontent.com/NovaVita/EDGE-GS/main/imagem/wokwi-refresh.png)

O protótipo do dispositivo Soul pode ser encontrado clicando [aqui](https://wokwi.com/projects/381491850878962689).

⚠ Atenção: Este é apenas um protótipo com as ferramentas que o Wokwi pode fornecer. O dispositivo Soul tem como objetivo ser compacto e leve para ficar tranquilamente acoplado no corpo humano sem preocupações. Seus sensores serão de ponta e capazes de captar com precisão todos os dados necessários para monitorar o paciente.

Ilustração do dispositivo Soul:
![Texto Alternativo](https://www.yankodesign.com/images/design_news/2018/05/auto-draft/dab_ecg_1.jpg)

---

## **Time**

|       Aluno       |     Rm     |   Turma   |
| ----------------- | ---------- | --------- |
| Rony Ken Nagai    |   551549   |   1ESPF   |
| Tomáz V. Carballo |   551417   |   1ESPF   |

---

## **Conecte-se Conosco**

Siga-nos para ficar atualizado sobre nossas inovações em saúde e tecnologia. Faça parte da comunidade NovaVita, onde a inovação, qualidade de vida e otimismo convergem para um futuro mais saudável.

### **LinkedIn:**

* [Rony Ken Nagai](https://www.linkedin.com/in/rony-nagai)
* [Tomáz Versolato Carballo](https://www.linkedin.com/in/tomazcarballo/)

---

## **Como Contribuir**

- 🌐 Explore nossos projetos.
- 🐛 Relate problemas ou sugira melhorias.
- 🤝 Junte-se a nós na missão de transformar a saúde.

---

# **Juntos, estamos construindo o futuro da saúde! 💚👩‍⚕️👨‍⚕️**

![Texto Alternativo](https://raw.githubusercontent.com/NovaVita/.github/main/foto-time.jpeg)

#Inovação #SaúdeDigital #IdealismoEmTecnologia #NovaVitaTech
