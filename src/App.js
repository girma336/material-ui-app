import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Layout from './components/Layout'
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fefefe'
        }
    }
})
const  App = () => {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;