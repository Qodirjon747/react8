import './App.css'
import Infocard from './components/infocard/infocard'
import Usercard from './components/usercard/usercard'

function App() {
  return (
    <div>
      <div className="user-ota">
        <div className="container">
          <Usercard ism="Emily Johnson" kasbi="Product Manager" joy="Product Development"></Usercard>
          <Usercard ism="Arjun Patel" kasbi="Software Engineer" joy="Technology"></Usercard>
          <Usercard ism="Carlos Hernández" kasbi="UI Designer" joy="Design"></Usercard>
          <Usercard ism="Amina Idris" kasbi="Marketing Specialist" joy="Marketing"></Usercard>
          <Usercard ism="Takumi Sato" kasbi="HR Specialist" joy="Human Resources"></Usercard>
          <Usercard ism="Chen Wei" kasbi="Data Analyst" joy="Data Science"></Usercard>
          <Usercard ism="Emma Dubois" kasbi="Sales Manager" joy="Sales"></Usercard>
          <Usercard ism="Igor Sokolov" kasbi="Quality Assurance" joy="Quality Control"></Usercard>

        </div>

      </div>
      <div className="info-ota">
          <Infocard joyi="Unraveling the Mysteries of the Ocean" nomi="From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration. "  ></Infocard>
          <Infocard joyi="Discovering the World of Mountains" nomi="In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. "  ></Infocard>
          <Infocard joyi="Discovering the World of Mountains" nomi="In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration. "  ></Infocard>
          <Infocard joyi="Exploring the Secrets of the Forest" nomi="Step into the mesmerizing realm of the forest, a sanctuary of life teeming with a symphony of sounds, scents, and vibrant green hues. "  ></Infocard>

      </div>
    </div>
  )
}

export default App
