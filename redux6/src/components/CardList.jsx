import { useSelector } from 'react-redux';
import moment from "moment";

import { itemsSelector, countrySelector } from 'src/redux/covidSlice'
import { styled } from "../stitches.config";
import Card from './Card';


export default function CardList() {
  const country = useSelector(countrySelector);
  const items = useSelector(itemsSelector)


  let UpdatedDate = moment(items?.lastUpdate).format("MMMM Do YYYY, h:mm:ss a") || "";

  const cardValues = [
    {
      title: 'Infected',
      value: items && items?.confirmed.value,
      date: UpdatedDate,
      bgColor: '#B0D7FD',
      border: '#576BFE'
    },
    {
      title: 'Recovered',
      value: items && items?.recovered.value,
      date: UpdatedDate,
      bgColor: '#DDF6E2',
      border: '#6EFA70'
    },
    {
      title: 'Deaths',
      value: items && items?.deaths.value,
      date: UpdatedDate,
      bgColor: '#F4D6D6',
      border: '#F96A6A'
    },
    {
      title: 'Active',
      value: items && items?.confirmed.value - items?.recovered.value - items?.deaths.value,
      date: UpdatedDate,
      bgColor: '#F4E1C9',
      border: '#F2E564'
    },
  ];


  return (
    <List>
      {cardValues?.map((item, index) => (
        <Card key={index} item={item} country={country} />
      ))}
    </List>
  )
}


const List = styled('ul', {
  display: 'grid',
  gridGap: '$4',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  pa: '20px',
  my: '$7',
  width: '80%',
  '@bp3': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
  '@bp5': {
    width: '100%'
  }
})