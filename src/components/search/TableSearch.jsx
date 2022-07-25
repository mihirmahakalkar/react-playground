import { useState } from 'react'
import { Users } from './users';
import './tableSearch.scss';

const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TableSearch = () => {

  const [query, setQuery] = useState('');
  const keys = ['first_name', 'last_name', 'email'];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    )
  }

  return (
    <div id="tableSearch" className="tableSearch maxh-350">
      <h2>Table Search</h2>
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Table data={search(Users)} />
    </div>
  )
}

export default TableSearch