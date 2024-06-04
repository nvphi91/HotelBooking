import React from 'react'
import RoomList from './RoomList'

const getRooms = async () => {
  const res = await fetch(`${process.env.DOMAIN}/api/rooms?populate=*`,{
    // next: {
    //   revalidate: 0
    // }
  })
  return await res.json()
}

const Rooms = async () => {

  const rooms = await getRooms();
  
  return (
    <section>
      <div className='container'>
        <RoomList rooms={rooms}/>
      </div>
    </section>
  )
}

export default Rooms