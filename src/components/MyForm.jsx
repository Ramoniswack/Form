
function Form() {
  return (
    <>
     <div>Form</div>
    <form>
      <label htmlFor="name">Name :</label>
      <input type="text" placeholder="Name" />
            <br></br>

      <label htmlFor="email">Email :</label>
      <input type="email" placeholder="Email" />
            <br></br>
 
      <label htmlFor="password">Password :</label>
      <input type="password" placeholder="Password" />
            <br></br>

      <label htmlFor="phone">Phone :</label>
      <input type="text" placeholder="Phone" />
            <br></br>

      <label htmlFor="address">Address :</label>
      <input type="text" placeholder="Address" />
            <br></br>

      <label htmlFor="City">City :</label>
      <input type="text" placeholder="City" />
            <br></br>

      <label htmlFor="state">State :</label>
      <input type="text" placeholder="State" />
            <br></br>

            
        <button type="submit">Submit</button>

      </form>
    
    
    </>

  )
}

export default Form;