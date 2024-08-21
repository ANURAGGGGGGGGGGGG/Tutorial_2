import React from 'react'

const TodoListing = (props) => {

    const {data} = props
    console.log(data); 
  return (
    <div>
      <table className="table table-hover table-dark mx-3  mt-5 ">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Todo</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((todo) => {
            return(

    <tr>
      <th scope="row">{todo.id}</th>
      <td>{todo.name}</td>
      <td>{todo.status}</td>
    </tr>
            )
        })
    }
  </tbody>
</table>

    </div>
  )
}

export default TodoListing
