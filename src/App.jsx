
import './App.css'
import Cards from './component/Cards'

function App() {
  
  const data = [
    {name: "Card 1", description: "This is card 1 description", image: "https://images.pexels.com/photos/60783/pexels-photo-60783.jpeg?auto=compress&cs=tinysrgb&w=600"}, 
    {name: "Card 2", description: "This is card 2 description", image: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=600"}, 
    {name: "Card 3", description: "This is card 3 description", image: "https://images.pexels.com/photos/947177/pexels-photo-947177.jpeg?auto=compress&cs=tinysrgb&w=600"}, 
    {name: "Card 4", description: "This is card 4 description", image: "https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&w=600"}, 
    {name: "Card 5", description: "This is card 5 description", image: "https://images.pexels.com/photos/18620543/pexels-photo-18620543/free-photo-of-a-man-is-standing-in-front-of-pigeons.jpeg?auto=compress&cs=tinysrgb&w=600"}, 
    {name: "Card 6", description: "This is card 6 description", image: "https://images.pexels.com/photos/326709/pexels-photo-326709.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name: "Card 7", description: "This is card 7 description", image: "https://images.pexels.com/photos/2676587/pexels-photo-2676587.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name: "Card 8", description: "This is card 8 description", image: "https://images.pexels.com/photos/2265767/pexels-photo-2265767.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {name: "Card 9", description: "This is card 9 description", image: "https://images.pexels.com/photos/979722/pexels-photo-979722.jpeg?auto=compress&cs=tinysrgb&w=600"}


  ]
  return (
    <>
    <div >
    <h1 className='text-4xl text-center text-white mb-10 mt-10'>All The Cards Are Here</h1>
    </div>
    <Cards data={data}/>
    </>
  )
}

export default App
