import React, {useState} from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'The simpsons']);
    //     setCategories( c => ['The simpsons', ...categories])
    // }

  return (
      <>
      <h2>GifExpertApp</h2>

      <AddCategory setCategories={setCategories}/>
      <hr/>
      <ol>
          {
              categories.map( category => (
                <GifGrid category={category}
                key={category}
                />
              ))
          }
      </ol>
      {/* <button onClick={handleAdd}>Agregar</button> */}
      </>
  )
}

GifExpertApp.propTypes = {}

export default GifExpertApp