import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getGames } from '../redux/gameSlice';
import image from '../images/cryptocurrencyimage.jpeg';

function FetchApi() {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.game);

  useEffect(() => {
    dispatch(getGames());
  }, []);
  return (
    <div className="flex bg-pink-100 flex-col text-white">
      <div className="flex items-center justify-center space-x-2 h-32">
        <img src={image} alt="crypto" className="w-1/2" />
        <div>
          <h1 className="font-extrabold text-2xl">Crypto Exhange</h1>
          <p className="font-semibold text-lg">
            {allGames.length}
            {' '}
            crypto
          </p>
        </div>
      </div>
      <div className="text-start pl-5 bg-pink-200 text-xl font-medium">
        Stats
      </div>
      <ul className="list-items grid grid-cols-2">
        {allGames.map((game, id) => (
          <li className="item flex flex-col items-center justify-center h-28 p-6" key={game.id}>
            <img className="w-2/5 self-start" src={game.image} alt="crypto" />
            <Link to={`details/${id}`}>
              <div className="self-end">
                <p className="font-bold text-lg">{game.name}</p>
                <p className="font-semibold">
                  $
                  {game.current_price}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchApi;
