import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getGames } from '../redux/gameSlice'

const Details = () => {
    const dispatch = useDispatch()
    const allGames = useSelector(state => state.game)
    useEffect(() => {
        dispatch(getGames())
    }, [dispatch])
    const {id} = useParams()
  return (
    <>
    <div>{allGames[id].name}</div>
    <div>{allGames[id].symbol}</div>
    </>
  )
}

export default Details