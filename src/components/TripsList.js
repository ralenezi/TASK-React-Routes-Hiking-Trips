import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import tripsData from '../tripsData'
import SearchBar from './SearchBar'
import TripItem from './TripItem'

function TripsList() {
  const [query, setQuery] = useState('')
  const [searchParams, setSearchParams] = useSearchParams({ difficulty: '' })

  const trips = tripsData
    .filter(
      (trip) =>
        trip.name.toLowerCase().includes(query.toLowerCase()) &&
        trip.difficulty
          .toLowerCase()
          .includes(searchParams.get('difficulty').toLowerCase())
    )
    .map((trip) => <TripItem trip={trip} key={trip.id} />)

  return (
    <section className='page-section portfolio' id='portfolio'>
      <div className='container'>
        <h2 className='page-section-heading text-center text-uppercase text-secondary mb-0'>
          Explore Trips
        </h2>
        <br />
        <SearchBar setQuery={setQuery} />
        <center>
          <button
            className='btn btn-primary btn-xl'
            onClick={() => setSearchParams({ difficulty: 'easy' })}>
            Easy
          </button>
          <button
            className='btn btn-primary btn-xl'
            onClick={() => setSearchParams({ difficulty: 'moderate' })}>
            Moderate
          </button>
          <button
            className='btn btn-primary btn-xl'
            onClick={() => setSearchParams({ difficulty: 'hard' })}>
            Hard
          </button>
        </center>
        <div className='divider-custom'>
          <div className='divider-custom-line'></div>
          <div className='divider-custom-icon'>
            <i className='fas fa-star'></i>
          </div>
          <div className='divider-custom-line'></div>
        </div>

        <div className='row justify-content-center'>{trips}</div>
      </div>
    </section>
  )
}

export default TripsList
