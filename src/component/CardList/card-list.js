import Card from '../Card/card';
import "./card-list.css";



export const CardList = ({ robots }) => {
    return (
        <div className="center w-100">
            {
                !robots.length ? <p className="f6 mt6">No result(s)</p> :
                robots.map((item) => <Card key={item.id} {...item}/> )
            }
        </div>
    );
}

