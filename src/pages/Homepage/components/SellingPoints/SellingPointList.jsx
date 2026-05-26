import styles from "@/assets/styles/layouts/SellingPoint.module.scss";
import SellingPoint from "./SellingPoint";

function SellingPointList({ sellingPoints }) {
  return (
    <>
      {/** Les arguments commerciaux */}
      <section className={`${styles.sectionSellingPoints} container mt-5`}>
        {sellingPoints && (
          <ul className="row">
            {sellingPoints.map((s, index) => (
              <li
                key={s.title}
                className={`${styles.sellingPointLiElement} col-12 col-md-6 col-lg-4 mb-4`}
              >
                <SellingPoint sellingPoint={s} index={index} />
              </li>
            ))}
          </ul>
        )}{" "}
      </section>
    </>
  );
}

export default SellingPointList;
