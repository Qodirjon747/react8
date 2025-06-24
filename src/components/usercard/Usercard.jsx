import './usercard.css'

function usercard(props) {
    return (
        <div>
            <div className="usercard">
                <img src="./rasm.png" alt="" />
                <h2>{props.ism}</h2>
                <p>{props.kasbi}</p>
                <p>{props.joy}</p>
            </div>
        </div>
    )
}

export default usercard
