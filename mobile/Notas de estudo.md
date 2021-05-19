4° Dia: Estruturando app mobile

*- (00:00:00) Criando projeto com Expo *
	    -Depis de instalado o Expo: yarn global add expo-cli ou npm install expo-cli --global 
	    -Entrar na pasta pra criar o projeto: expor init mobile (mobile = nome da pasta que vai   conter todos as dependecias do projeto)
		  -Choose a template: » blank (TypeScript)

*- (00:06:05) Executando aplicação *
              - yarn start

*- (00:11:30)Particularidade de React Native *
  - Elementos
  - Estilização

*- (00:19:44) Estruturando Landing Page *
              - ciração da pasta 'src' e inclusão da pasta imagens
    Obs.: -Por padrão o ReactNative não lê SVG. Necesssário a instalção de um pacote: 
            - expo install react-native-svg
                -> opcional: expo client:install:android

      (:26:25) <View><View/> -> Cria uma View na tela.
               <></> ->  Fragmente: não repassa o conteudo pro Html

      (:36:10) Instalação de fonts no EXPO:
              -> expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins
              intala as dus fontes: Archivo e Poppins

              -> import { AppLoading } from 'expo'; AppLoadin = Mantel a tela de Splash visivel até fontes ou outros componetes do App ser carregado
      (:42:15) Estruturação da Landing Pages 
                -> criação dos containers para os botões 'Estudar' e 'Dar Aulas'
                -> Estilização da Landing Page 
                -> Dica de video: //Styled-Componets
                (:51:50) fim da Landing page
      (:52:20) Navegação da Landing Page (Rotas)
                -> instalação da Biblioteca de navegação:
                        https://reactnavigation.org/docs/getting-started/
                        1 - yarn add @react-navigation/native
                        2 - expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
                                Fim da page: Hello React Navegation
                                3 - yarn add @react-navigation/stack  ->> para o tipo de navegação
                                Noutra Aba: Tab navigations:
                                4 - yarn add @react-navigation/bottom-tabs
        (01:04:55) - Página de "Dar aulas"*
- Páginas internas *
- Navegação em abas *
- Componente PageHeader *
- Lista de professores *