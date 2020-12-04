// Components
import Header from './Header'
import Intro from './Intro'
import ProjectList from './ProjectList'
import Footer from './Footer'
// Stylesheets
import '../styles/App.scss'

const App = () => {
  return (
      <div>
        <Header />
        <Intro />
        <ProjectList />
        <Footer />
      </div>
  )
}

export {App as default}