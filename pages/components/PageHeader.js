import Card from 'react-bootstrap/Card';

export default function PageHeader({title}) {
  return (<>
    <Card className='bg-light'>
      <Card.Body><strong>{title}</strong></Card.Body>
    </Card>
    <br />
  </>);
}