import "./card.css";



const Card = (props) => (
    <div className="bb bg-light-red fl w-12 grow m-10 b--white br3 ma2 tc pointer shadow-5">
        <img src={`https://robohash.org/set_set5/${props.name}?size=150x150`} alt={props.name}/>
        <p className="f6 grey ma0 mt2 white">{props.name}</p>
        <p className="f6 navy white">{props.username}</p>
        <p className="f6 navy ma0 mb3 white">{props.email}</p>
    </div>
);

export default Card;