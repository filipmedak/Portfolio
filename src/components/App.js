// Components
import Header from './repeating/Header'
import Intro from './homepage/Intro'
import ProjectList from './homepage/ProjectList'
import Footer from './repeating/Footer'
// Stylesheets
import '../styles/App.scss'

const App = () => {
  return (
      <>
        <Header />
        <Intro />
        <ProjectList />
        <Footer />
      </>
  )
}

export {App as default}