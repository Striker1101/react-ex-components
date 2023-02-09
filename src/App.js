import { Container } from "./component/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import Header from "./component/header";
import GlobalStyles from "./component/styles/Global";
import content from './content'
import Card from "./component/card";
import Footer from "./component/footer";
function App() {
  const theme = {
    colors:{
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333'
    },
    mobile: '765px'
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App"> 
        <Header />
        <Container>
          {content.map((item, index)=>{
            return(
              <Card key={index} item={item} />
            )
          })}
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
