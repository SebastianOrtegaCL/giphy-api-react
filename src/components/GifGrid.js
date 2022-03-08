import React from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';

const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data: imgs, loading} = useFetchGifs(category);

  return (
    <>
    <h3>{category}</h3>
    {loading && <p>loading</p>}
    <div className='card-grid'>
            {
                imgs.map( img =>(
                    <GifGridItem
                     {...img}
                     key={img.id}
                     />
                 ))
            }
    </div>
    </>
  )
}

GifGrid.propTypes = {}

export default GifGrid