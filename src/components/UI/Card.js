import ugh from './Card.module.css'


const Card = (props) => {
  return (
    <div className={`${ugh.card} ${props.sexyLook}`}>
      {props.children}
    </div>
  )
}

export default Card
