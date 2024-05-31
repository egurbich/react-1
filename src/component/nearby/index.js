import "./index.css";

import Box from "../box";
import { Fragment } from "react";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Nearby({ list }) {
  return (
    <Box className="nearby">
      <Heading border>Пам'ятки поблизу</Heading>
      <div className="nearby">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <List {...rest} />
          </Fragment>
        ))}
      </div>
    </Box>
  );
}

function List({ name, link }) {
  return (
    <ul className="nearby__list">
      <ListItem
        children={
          <a className="nearby__link" href={link}>
            {name}
          </a>
        }
      />
    </ul>
  );
}
