import Card from "../Card/Card";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({myFavorites}) => {

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();
    
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    };

    return (
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
                <option value="AllCharacters">All Characters</option>
            </select>
      {
          myFavorites?.map((fav) => {
              console.log(fav);
              return (
                  <Card
                  key={fav.id}
                  id={fav.id}
                  name={fav.name}
                  image={fav.image}/>
                  );
                })
            }
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(
    mapStateToProps,
     null
     )(Favorites);
