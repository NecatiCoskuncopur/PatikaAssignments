import styled from 'styled-components';
import { variant } from 'styled-system';

const Text = ({ value, type }) => {
  return <Span variant={type}>{value}</Span>;
};

export default Text;

const Span = styled('span')(
  {
    appearance: 'none',
    fontFamily: 'inherit',
  },
  variant({
    variants: {
      correct: {
        color: 'green',
      },
      incorrect: {
        color: 'red',
      },
      bold: {
        fontWeight: 700,
      },
    },
  })
);
