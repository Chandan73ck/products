
import './App.css'
import Banana from './component/Banana'
import products from './component/products'

function App() {


  return (
    <>
      <div className='container flex gap-4 ' >
        {products.map(products => (
          <Banana
            image={products.pictures}
            name={products.name}
            price={products.price}
          />
        ))}

      </div>


    </>
  )
}

export default App
