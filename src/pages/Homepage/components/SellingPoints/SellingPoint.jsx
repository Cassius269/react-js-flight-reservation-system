import styles from "@/assets/styles/layouts/SellingPoint.module.scss";

function SellingPoint({ sellingPoint, index }) {
  let backgroundColor = null;

  switch (index) {
    case 0:
      backgroundColor = "bg-primary";
      break;
    case 1:
      backgroundColor = "bg-danger";
      break;
    case 2:
      backgroundColor = "bg-warning";
      break;
  }
  return (
    <>
      <article
        className={`${styles.sellingPoint} d-flex flex-column justify-content-between p-4 h-100`}
      >
        <div>
          <div
            className={`${backgroundColor} d-flex justify-content-center p-2`}
            style={{ maxWidth: 70 }}
          >
            <img
              src={sellingPoint.img}
              alt=""
              width={60}
              className={`rounded-5 p-2`}
            />
          </div>

          <h4 className="mt-3">{sellingPoint.title}</h4>
        </div>
        <p>{sellingPoint.content}</p>
      </article>
    </>
  );
}

export default SellingPoint;
