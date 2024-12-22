export const InfoText = () => {
  return (
    <section className="info-text">
      <div className="container">
        <h2>Embark on a space journey</h2>
        <p className="info-text__content">
          Travelling into space is one of the most exciting and unforgettable
          adventures that can change your life forever. And if you have ever
          dreamed of exploring stars, planets and galaxies, then our company is
          ready to help you realize this dream. We offer a unique experience
          that will allow you to go on a space journey and see all the secrets
          of the universe. We guarantee that every moment in space will be
          filled with incredible impressions, excitement and new discoveries.
          Our team of professionals takes care of your safety and comfort so
          that you can fully enjoy your adventure in space. We offer various
          options for space excursions.
        </p>
        <input
          type="checkbox"
          id="text-toggle"
          className="info-text__text-toggle"
        />
        <label htmlFor="text-toggle" className="info-text__label">
          <span className="info-text__read-more"></span>
        </label>
        <p className="info-text__content info-text__content_full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          provident ullam reiciendis nemo blanditiis tenetur temporibus itaque!
          Itaque voluptas alias inventore, in tenetur odio beatae sequi quos,
          qui perferendis explicabo.
        </p>
      </div>
    </section>
  )
}
