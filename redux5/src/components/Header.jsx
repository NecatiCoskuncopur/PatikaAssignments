import { toggle } from '../redux/textSlice';
import { useDispatch } from 'react-redux';
import { FaQuestion } from 'react-icons/fa'
import { styled } from '../stitches.config';


export default function Header() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggle())
  }

  return (
    <Container>
      <Title>Markdown Previewer</Title>
      <Button onClick={() => handleClick()}>
        <FaQuestion size={30} />
      </Button>

    </Container>
  )
}


const Container = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  '@bp4': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});


const Title = styled('h1', {
  fontSize: '$5',
  fontWeight: '$3',
  textAlign: 'center',
  my: 0,
  order: '2',
  '@bp4': {
    order: '0',
    pl: '$2',
    mt: 0,
    fontSize: '$4',
    textAlign: 'left',
  }
});


const Button = styled('button', {
  alignSelf: 'flex-end',
  height: '40px',
  width: '40px',
  textAlign: 'center',
  m: '$3',
  boxShadow: '$btnShadow',
  background: '$bgSecondary',
  cursor: 'pointer',
  transition: ' 0.2s all ease-out',
  '&:hover': {
    boxShadow: '$btnShadowHover'
  },
  '@bp4': {
    alignSelf: 'center',
    m: 0,
    height: 'inherit',
    boxShadow: 'none',
  }
});
