import { styled } from "../stitches.config"


export default function Card({ item, country }) {

  return (
    <ListItem style={{ backgroundColor: `${item.bgColor}`, borderBottom: `10px solid ${item.border}` }}>
      <h1>{item.title}</h1>
      <Value>{item.value}</Value>
      <Date>Last Updated at: <span>{item.date}</span></Date>
      <Text>Number of {item.title.toLowerCase()} cases of <br /> COVID-19 {" "}
        {country ? (country) : 'Global'}
      </Text>
    </ListItem>
  )
}


const ListItem = styled('li', {
  pa: '$4',
  pb: '$5',
  borderRadius: '$1',
  textAlign: 'center',
  h1: {
    mb: '$2',
    lineHeight: '1.5',
    fontSize: '$4',
  },

});


const Value = styled('b', {
  fontSize: '$4',
  lineHeight: '1.4',
  color: '$color1',
});


const Date = styled('p', {
  fontSize: '$3',
  lineHeight: '1.5',
  fontWeight: '$3',
  color: '$color2',
  mb: '$3',
  span: {
    fontWeight: '$1',
  }
});


const Text = styled('p', {
  m: 0,
  fontSize: '$2',
  lineHeight: '1.4',
  color: '$color1',
});