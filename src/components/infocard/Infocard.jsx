import  './infocard.css'

function infocard(props) {
  return (
    <div>
      <div className="infocard">
        <img src="./rasm2.png" alt="" />
        <h1>{props.joyi}</h1>
        <p>{props.nomi}</p>
        <button className='btn'>Read now</button>
      </div>
    </div>
  )
}

export default infocard
