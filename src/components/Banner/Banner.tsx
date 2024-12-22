import { Button } from '../Button/Button'

export const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__wrapper">
        <h1 className="banner__title">
          Discover the vast expanses of <span>space</span>
        </h1>
        <h2 className="banner__subtitle">
          Where the possibilities are <span>endless!</span>
        </h2>
        <Button>Learn more</Button>
      </div>
    </section>
  )
}
