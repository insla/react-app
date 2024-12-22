import rocket from '@images/rocket.webp'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__wrapper">
        <img alt="rocket" src={rocket} />
        <p>Exciting space adventure!</p>
      </div>
    </footer>
  )
}
