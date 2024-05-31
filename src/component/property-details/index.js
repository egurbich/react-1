import "./index.css";

import guests_icon from "./guests.svg";
import bedroom_icon from "./bedroom.svg";
import beds_icon from "./beds.svg";
import bath_icon from "./bath.svg";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Price({ title, ...rest }) {
  return (
    <Box className="property__details">
      <Heading border>{title}</Heading>
      <List {...rest} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="property-details__list">
      <ListItem children={`${guests} гостя`} imageSrc={guests_icon} />
      <ListItem children={`${bedrooms} спальня`} imageSrc={bedroom_icon} />
      <ListItem children={`${beds} ліжко`} imageSrc={beds_icon} />
      <ListItem children={`${baths} ванна кімната`} imageSrc={bath_icon} />
    </ul>
  );
}
