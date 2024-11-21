import React from 'react'
import Head from './Head'
import Cards from './Cards'
import SearchBar from './SearchBar'
import Table from './Table'

const Attendance = () => {
  return (
    <div className='flex flex-col bg-slate-200'>
    <Head />
    <Cards/>
    <SearchBar/>
    <Table/>
    </div>
  )
}

export default Attendance
