// "use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa';
const RoomList = ({ rooms }: { rooms: any }) => {

    return (
        <section className='py-16 min-h-[90vh]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {
                    rooms.data.map((room: any) => {
                        const imgURL = `${process.env.DOMAIN}${room.attributes.image.data.attributes.url}`
                        // console.log(room);
                        return <div key={room.id}>
                            <Link href={`/room/${room.id}`}>
                                <div className=' relative w-full h-[300px] overflow-hidden mb-6'>
                                    <Image src={imgURL}
                                        alt=''
                                        fill
                                        priority
                                        className='object-cover' />
                                </div>
                            </Link>
                            <div className='h-[134px]'>
                                <div className='flex justify-between items-center mb-6'>
                                    <div>Capacity - {room.attributes.capacity} persion</div>
                                    <div className='flex gap-1 text-accent'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStarHalf />
                                    </div>
                                </div>
                                <Link href={`/room/${room.id}`}>
                                    <h3 className='h3'>{room.attributes.title}</h3>
                                </Link>
                                <p className='h3 font-secondary font-medium text-accent mb-4'>
                                    ${room.attributes.price} <span className='text-base text-secondary'>/ night</span></p>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default RoomList