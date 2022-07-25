import { useState } from 'react';
import './basicSearch.scss';
import { Users } from './users';

const BasicSearch = (props) => {

  const [query, setQuery] = useState('');
  return (
    <div id="basicSearch" className="basicSearch maxh-350">
      <h2>Basic Search</h2>
      <input 
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <ul className="list">
        {/* {Users.map((user) => {
          return <li key={user.id} className="listItem">{user.first_name}</li>
        })} */}
        {Users.filter((user) => 
          user.first_name.toLowerCase().includes(query)
        ).map((queryUser) => {
          return <li className="listItem" key={queryUser.id}>
            {queryUser.first_name}
          </li>
        })}
      </ul>
    </div>
  )
}

export default BasicSearch;