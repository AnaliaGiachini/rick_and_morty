
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFavorite, deleteFavorite } from '../../redux/actions';
import React from 'react';


function Card({ name, species, gender, image, onClose, id }) {

   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const [isFav, setisFav] = useState(false); 
   
   const handleFavorite = () => {
      if(isFav) {
         setisFav(false)
         dispatch(deleteFavorite(id))
      } else {
         setisFav(true)
         dispatch(addFavorite({ name, species, gender, image, onClose, id }))
      }
   }
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id ===id) {
            setisFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div className={styles.cardContainer}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

         <button className={styles.close} onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img className={styles.cardImage} src={image} alt={name} />
      </div>
   );
}

export default Card;