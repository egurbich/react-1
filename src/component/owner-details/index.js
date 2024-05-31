import Heading from "../heading";
import "./index.css";

export default function OwnerDetails({
  title,
  imgSrc,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="owner-details">
      <div className="owner-details__header">
        <img
          className="owner-details__image"
          src={imgSrc}
          width="80"
          height="80"
          alt="owner"
        />
        <div className="owner-details__sub-block">
          <Heading>{title}</Heading>
          <div className="owner-details__items">
            <span className="owner-details__sub-value">{phone}</span>
            <span className="owner-details__sub-value">{response_time}</span>
            <span className="owner-details__sub-value">
              {response_rate}% швидкості відгуку
            </span>
          </div>
        </div>
      </div>
      <div>
        <p className="owner-details__text">{info}</p>
      </div>
    </div>
  );
}
