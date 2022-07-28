import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getGames } from '../redux/gameSlice'
import {Link} from 'react-router-dom'


function FetchApi() {
    const dispatch = useDispatch()
    const allGames = useSelector(state => state.game)
    console.log(allGames);
    useEffect(() => {
        dispatch(getGames())
    }, [dispatch])
    return (
        <div>
            {allGames.map((game, id) => (
                <Link to={`details/${id}`} key={game.id}>
                    <li>{game.name}</li></Link>
            ))}
        </div>
    )
}

export default FetchApi