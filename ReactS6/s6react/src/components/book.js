const Book = (props) => {
  return (
      <div>
      <h2>{props.info.title}</h2>
      <p>{props.info.author}</p>
      </div>
  )  
 }
 
 export default Book; 