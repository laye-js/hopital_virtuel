import './Cover.css'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import useStaticPageStore from '../state/staticPageStore.js'

const Cover = () => {
  const [isCoverActive, toggleCoverActive] = useStaticPageStore(
    state => [state.isCoverActive, state.toggleCoverActive]
    // shallow
  )

  const className = isCoverActive ? 'cover-container active' : 'cover-container'

  return (
    <div key='cover-container' className={className}>
      <div className='default-cover-container'>
        <div className='cover-content'>
          <div className='main-content'>
            <div className='header'>
              <h1>Hôpital Fann de Dakar</h1>
              <h2>Service hospitalier</h2>
              <h2>toutes unité confondues</h2>
              <p className='content-warning'>
                Avertissement : ces representations ne sont pas exactes une etude du terrain et une prise d'image est necessaire pour ameliorer l'application.
              </p>
            </div>
            <div className='navigation'>
              <Link
                role='button'
                onClick={e => toggleCoverActive()}
                className='nav-item'
                to='/introduction'
              >
                <Button action={e => toggleCoverActive()} label='Explorer' />
              </Link>
              <Link
                role='button'
                onClick={e => toggleCoverActive()}
                className='nav-item'
                to='/testimony'
              >
                <Button action={e => toggleCoverActive()} label='Témoignages' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cover
