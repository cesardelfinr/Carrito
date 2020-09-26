import React from 'react'
import { Input } from 'semantic-ui-react'
import logo from './logo.jpg'

function searchForm (props) {
    return(
      <div className="">
        <img src={logo} />
        <br/>
        <Input
          action={{ icon: 'search', color: 'teal' }}
          placeholder='Buscar...' />
      </div>
    )
}

export default searchForm;
