import {useState} from "react"

function App() {
  const [color, setColor] = useState("grey")

  return (
    <>
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}
    >
      <header className="p-4 bg-coolGray-100 text-coolGray-800 w-full">
          <div className="container flex justify-between h-16 mx-auto ">
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <li className="flex">
                <button onClick={ () => setColor("black")}
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-white"
                  style={{backgroundColor: "black"}}
              >
                  Black
                </button>
              </li>
              <li className="flex">
                <button onClick={ () => setColor("white")}
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent" 
                  style={{backgroundColor: "white"}}
                >
                  White
                </button>
              </li>
              <li className="flex">
                <button onClick={ () => setColor("blue")}
                  className="flex items-center px-12 -mb-1 border-b-2 border-transparent"
                  style={{backgroundColor: "blue"}}
                >
                  Blue
                </button>
              </li>
              <li className="flex">
                <button onClick={ () => setColor("brown")}
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                  style={{backgroundColor: "Brown"}}
                >
                  Brown
                </button>
              </li>
              <li className="flex">
                <button onClick={ () => setColor("yellow")}
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                  style={{backgroundColor: "yellow"}}
                >
                  Yellow
                </button>
              </li>
            </ul>
          </div>
        </header>
    </div>
    </>
  )
}

export default App
