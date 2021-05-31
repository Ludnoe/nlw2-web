4° Dia: Estruturando app mobile

- (00:00:00) Criando projeto com Expo *
	    -Depois de instalado o Expo: yarn global add expo-cli ou npm install expo-cli --global 
	    -Entrar na pasta pra criar o projeto: expor init mobile (mobile = nome da pasta que vai   conter todos as dependecias do projeto)
		  -Choose a template: » blank (TypeScript)

- (00:06:05) Executando aplicação *
              - yarn start

- (00:11:30)Particularidade de React Native *
  - Elementos
  - Estilização

- (00:19:44) Estruturando Landing Page *
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
                Import {RectButton} from 'react-native-gesture-handler' -> adaptar um efeito de click ao sistema utilizado. Opção pra substituir o TouchableOpacity
        (01:04:55) - Página de "Dar aulas"*
        (01:14:47) - Páginas internas *
                (:20:05) - encadeamento de routers(roteamento dentro do outro)
                         - Navegação em abas
                (:25:30)  icones nas abas: -> import {Ionicons} from '@expo/vector-icons'
        (01:29:30) - Componente PageHeader 
                        -resizeMode="contain" -> mantem o tamanho contido no tamanho do elemento que tem em volta

5º Dia: Finalizando app mobile
        ->(00:03:20) Lista de professores 
                     (:18:20) - Scroll   
        ->(00:22:50) Lista de favoreitos
        ->(00:24:09) Filtro de proferssores
                Dica de Selector para input
                        Picker (react-native-picker) -> do Expor
                (:33:24) Ocultando os filtros com icone
        ->(00:42:09) conectando com  a API
                        - yarn add axios (pra fazer a ligação com a Api)
                                • Obs.: Nessessario entrr na pasta do server e deixar      rodando (yarn start) pra fazer a ligação com a Api
                                • Verificar com o insomnia
                (:45:40) total de conexões
                (:46:00) Lista de professores
                (:57:30) Contato whatsapp
        ->(01:00:45) Adicionar e remover Favoritos
                Banco de dados dentro do dispositivo:
                -> expo install @react-native-community/async-storage
        -> Listando Favoritos
        ► Desafios

