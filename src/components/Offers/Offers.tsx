import { Button } from '../Button/Button'

export const Offers = () => {
  return (
    <section className="offers">
      <div className="container">
        <h2>Offers</h2>
        <div className="offers__cards">
          <div className="offers__card offers__card_1">
            <h3>Move the borders of reality!</h3>
            <h4>Go on a space adventure </h4>
            <Button size="desktop-large" appearance="outlined">
              Learn more
            </Button>
          </div>

          <div className="offers__card offers__card_2">
            <h3>Space is not just stars and planets</h3>
            <h4>Go on a space adventure</h4>
            <Button size="desktop-large" appearance="outlined">
              Learn more
            </Button>
          </div>

          <div className="offers__card offers__card_3">
            <h3>For those who dream of stars </h3>
            <h4>Our offer: make your dream come true</h4>
            <Button size="desktop-large" appearance="outlined">
              Learn more
            </Button>
          </div>

          <div className="offers__card offers__card_4">
            <h3>Fulfill your fantastic dreams</h3>
            <h4>Space has never been so close</h4>
            <Button size="desktop-large" appearance="outlined">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
