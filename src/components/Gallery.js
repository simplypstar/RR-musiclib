import React from 'react'
import GalleryItem from './GalleryItem'

function Gallery(props) {
    const display = props.data.map((item, i)=> {
        return (
            <GalleryItem item={item} key={i}/>
        )
    })
//gallery
    return (
    <div>
        {display}
    </div>
  )
}

export default Gallery