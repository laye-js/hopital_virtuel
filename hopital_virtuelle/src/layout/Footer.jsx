import React from 'react'
import './Footer.css'
import useStaticPageStore from '../state/staticPageStore.js'

const Footer = () => {
  const [isIntroductionPageActive] = useStaticPageStore(
    state => [state.isIntroductionPageActive]
    // shallow
  )

  const footerClassName = isIntroductionPageActive
    ? 'footer-container active'
    : 'footer-container'

  return (
    <div className={footerClassName}>
      <span className='text'>Scroll to Continue</span>
      <span className='icon up-n-down'>
        <svg
          className='icon icon-tabler'
          width='30'
          height='36'
          viewBox='0 0 24 24'
        >
          <path d='M6 7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4zm6 0v4'></path>
        </svg>
      </span>
    </div>
  )
}

export default Footer
