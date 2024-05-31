import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Additionas({ title, ...rest }) {
  return (
    <Box className="additionals">
      <Heading border>{title}</Heading>
      <List {...rest} />
    </Box>
  );
}

function List({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  checkin_instructions,
}) {
  return (
    <ul className="additionals__list">
      <ListItem title="Правила дому" children={house_rules} />
      <ListItem title="Політика скасування" children={cancellation_policy} />
      <ListItem title="Місцевий транспорт" children={local_transportation} />
      <ListItem title="Мови хоста" children={host_languages} />
      <ListItem
        title="Інструкції щодо реєстрації"
        children={checkin_instructions}
      />
    </ul>
  );
}
