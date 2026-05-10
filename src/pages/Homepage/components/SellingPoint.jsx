import styles from "../../../assets/styles/layouts/sellingPoint.module.scss";

function SellingPoint({ sellingPoint }) {
  return (
    <>
      <article
        className={`${styles.sellingPoint} d-flex flex-column justify-content-between p-4 h-100`}
      >
        <div>
          <div
            className="bg-secondary d-flex justify-content-center p-2"
            style={{ maxWidth: 70 }}
          >
            <img
              src={sellingPoint.img}
              alt=""
              width={60}
              className={`rounded-5`}
            />
          </div>

          <h4>{sellingPoint.title}</h4>
        </div>
        <p>{sellingPoint.content}</p>
      </article>
    </>
  );
}

export default SellingPoint;
