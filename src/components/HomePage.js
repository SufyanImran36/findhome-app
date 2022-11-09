import React, {useState} from 'react'
import SearchForm from './SearchForm'

function HomePage() {

  const [openPopup,setpopup]= useState(false);
  const [option,setoption] = useState("");
  

  return (
    <section className="bg-fixed bg-center" style={{'backgroundImage': `url("https://ffixephepheoizedsluo.supabase.co/storage/v1/object/public/other-pics/sofia-sanchez-UcoDZZ7DCXY-unsplash.jpg")`}} >
    <SearchForm popup={openPopup} setpopup={setpopup} option={option}/>
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-2xl mb-5 font-bold text-white md:text-3xl">
        Search properties in Pakistan
      </h2>
    </div>

    <div className="mx-auto mt-8 max-w-xl">
     <div className="grid grid-flow-row-dense grid-col-12 gap-4">
     <div className="flex justify-center">
        <button onClick={()=>{setoption("Buy");setpopup(true)}}
          class="col-span-3 mr-[7rem] group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none  active:text-white"
          
        >
          <span class="absolute inset-0 border border-current "></span>
          <span
            class="block border border-current bg-gray-300 active:bg-indigo-500 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
          >
              Buy
          </span>
        </button>
        <button onClick={()=>{setoption("Rent");setpopup(true)}}
          class="col-span-3 group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none active:text-white"
          
        >
          <span class="absolute inset-0 border border-current "></span>
          <span
            className="block border border-current bg-gray-300 active:bg-indigo-500 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
          >
              Rent
          </span>
        </button>
     </div>
     </div>
    </div>
    <div className="my-5 flex justify-start">
      <p className="text-xl text-white font-bold">Explore more on FindyourHome.com</p>
    </div>
    <div>

    </div>
  </div>

  
</section>
  )
}

export default HomePage