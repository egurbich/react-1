import "./index.css";

import pool_icon from "./pool.svg";
import gym_icon from "./gym.svg";
import breakfast_icon from "./breakfast.svg";
import wifi_icon from "./wifi.svg";
import parking_icon from "./parking.svg";
import pets_icon from "./pets.svg";
import transfer_icon from "./transfer.svg";
import concierge_icon from "./concierge.svg";
import roomservice_icon from "./roomservice.svg";
import kids_icon from "./kids.svg";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Amenities({ title, ...rest }) {
  return (
    <Box className="property__details">
      <Heading border>{title}</Heading>
      <List {...rest} />
    </Box>
  );
}

function List({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="property-details__list">
      {hasPool && <ListItem children={`Басейн`} imageSrc={pool_icon} />}
      {hasGym && <ListItem children={`Спортивний зал`} imageSrc={gym_icon} />}
      {hasFreeBreakfast && (
        <ListItem
          children={`Безкоштовний сніданок`}
          imageSrc={breakfast_icon}
        />
      )}
      {hasFreeWiFi && (
        <ListItem children={`Безкоштовний Wi-Fi`} imageSrc={wifi_icon} />
      )}
      {hasParking && (
        <ListItem
          children={`Безкоштовний вуличний паркінг`}
          imageSrc={parking_icon}
        />
      )}
      {hasPetsAllowed && (
        <ListItem
          children={`Дозволено розміщення з домашніми тваринами`}
          imageSrc={pets_icon}
        />
      )}
      {hasAirportShuttle && (
        <ListItem
          children={`Трансфер до/з аеропорту`}
          imageSrc={transfer_icon}
        />
      )}
      {hasConciergeService && (
        <ListItem children={`Консьєрж-сервіс`} imageSrc={concierge_icon} />
      )}
      {hasRoomService && (
        <ListItem
          children={`Обслуговування номерів`}
          imageSrc={roomservice_icon}
        />
      )}
      {hasChildFriendly && (
        <ListItem children={`Підходить для дітей`} imageSrc={kids_icon} />
      )}
    </ul>
  );
}
