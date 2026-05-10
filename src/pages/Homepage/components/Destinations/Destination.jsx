import styles from "../../../../assets/styles/layouts/Destination.module.scss";

function Destination({ destination }) {
  return (
    <>
      <article className={`${styles.articleCityDestination}`}>
        <img
          src={destination.imageUrl}
          alt="image représentant la ville"
          style={{ maxWidth: "100%" }}
          className="m-auto"
        />
        <div className={`${styles.divCityPlusPrice} d-flex flex-row gap-5`}>
          <div>
            <p>{destination.cityName}</p>
            <i>{destination.alias}</i>
            <p>A partir de {destination.averagePrice} euros</p>
          </div>
          <i className="bi bi-chevron-right fs-1 d-flex align-items-center"></i>
        </div>
      </article>
    </>
  );
}

export default Destination;
