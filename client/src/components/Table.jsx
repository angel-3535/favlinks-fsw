function TableHeader(){
    /* responsible for rendering the head of our table with the appropriate columns */
    return(
      <thead>
        <tr>
          <th>Name</th>
          <th>URL</th>
          <th>Remove</th>
        </tr>
      </thead>
    )
}

const TableBody = (props) => {
  
    const rows = props.linkData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>
            <a href={row.URL}>{row.URL}</a>
          </td>
          <td>
            <button onClick={() => props.removeLink(index)}>Delete</button>
          </td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }


function Table(props){
    return(
        <table>
        <TableHeader/>
        <TableBody linkData={props.linkData} removeLink={props.removeLink}/>
        </table>
  )
}

export default Table