import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getGames } from '../redux/gameSlice';

const Details = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.game);
  useEffect(() => {
    dispatch(getGames());
  }, []);
  const { id } = useParams();
  return (
    <div className="flex bg-pink-100 flex-col text-white">
      <div className="flex items-center justify-center space-x-4 min-h-32">
        <img src={allGames[id].image} alt="crypto" className="w-1/3" />
        <div>
          <h1 className="font-extrabold text-2xl">{allGames[id].name}</h1>
          <p className="font-semibold text-lg">
            $
            {allGames[id].current_price}
          </p>
        </div>
      </div>
      <div className="text-start pl-5 bg-pink-200 text-xl font-medium">
        Stats
      </div>
      {allGames.length > 0 && (
      <ul className="">
        <li className="flex items-center justify-between bg-pink-400 p-3 h-14 text-start">
          <span>name:</span>
          <span>{allGames[id].name}</span>
        </li>
        <li className="flex items-center justify-between bg-pink-300 p-3 h-14 text-start">
          <span>symbol:</span>
          {' '}
          <span>{allGames[id].symbol}</span>
        </li>
        <li className="flex items-center justify-between bg-pink-400 p-3 h-14 text-start">
          <span>current price:</span>
          {' '}
          <span>
            $
            {allGames[id].current_price}
          </span>
        </li>
        <li className="flex items-center justify-between bg-pink-300 p-3 h-14 text-start">
          <span>rank:</span>
          {' '}
          <span>{allGames[id].market_cap_rank}</span>
        </li>
        <li className="flex items-center justify-between bg-pink-400 p-3 h-14 text-start">
          <span>ath:</span>
          {' '}
          <span>{allGames[id].ath}</span>
        </li>
        <li className="flex items-center justify-between bg-pink-300 p-3 h-14 text-start">
          <span>market cap:</span>
          {' '}
          <span>{allGames[id].market_cap}</span>
        </li>
        <li className="flex items-center justify-between bg-pink-400 p-3 h-14 text-start">
          <span>total supply:</span>
          {' '}
          <span>{allGames[id].total_supply}</span>
        </li>
        <li className="flex items-center justify-between bg-pink-300 p-3 h-14 text-start">
          <span>total volume:</span>
          {' '}
          <span>{allGames[id].total_volume}</span>
        </li>
      </ul>
      )}
    </div>
  );
};

export default Details;
