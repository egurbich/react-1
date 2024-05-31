import Box from "../box";
import { Fragment } from "react";

import Heading from "../heading";

import "./index.css";

export default function Reviews({ list }) {
  return (
    <div className="review__block">
      <Heading border>Відгуки клієнтів</Heading>

      <div className="review__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function Item({ guestName, rating, review }) {
  return (
    <Box className="review">
      <div className="review__header">
        <span className="review__title">{guestName}</span>
        <span className="review__info">Рейтинг: {rating}</span>
      </div>
      <span className="review__text">{review}</span>
    </Box>
  );
}
