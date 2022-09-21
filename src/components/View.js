import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({laptops, deleteLaptop}) => {
    return laptops.map(laptop=>(
        <tr key={laptop.laptop_name}>
            <td>{laptop.laptop_name}</td>
            <td>{laptop.brand}</td>
            <td>{laptop.color}</td>
            <td>{laptop.price}</td>
            <td className='delete-btn' onClick={()=>deleteLaptop(laptop.laptop_name )}>
                <Icon icon={trash}/>
            </td>
        </tr>
    ))
}