import React , { useState, usestate }from 'react'



export default function Note() {
  const [ title, setTitle ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ note, setNote ] = useState([
    // {
    //     title: "Hello world",
    //     body: "selection views"
    // },
    // {
    //     title: "New Class",
    //     body: "The messages"
    // },
    // {
    //     title:'class 3',
    //     body: "this is a new body for messages"
    // },
  ])
  const [ customModal, setCustomModal ] = useState(false)
  const toggleModal = () => {
     console.log(customModal)
     setCustomModal(!customModal)
  }

//   const onChange = (e) => {
//     const text = e.target.value 
//     setTitle(text)
//     console.log(title)
//   }


//   const Note = {
//         ...note,
//         title: title,
//         message: message 
//     }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newNote = {
        ...note,
        title: title,
        message: message 
    }
    console.log(newNote);
    note.push(newNote);
    setCustomModal(!customModal);
    
    
    setTitle('')
    setMessage('')
  }
    
//   const demo = [
//     {
//         title: "Hello world",
//         body: "selection views"
//     },
//     {
//         title: "New Class",
//         body: "The messages"
//     },
//     {
//         title:'class 3',
//         body: "this is a new body for messages"
//     },
//   ]


    return (

    <div className=''>
        <div className='h-[100vh] w-[100%]  flex items-enter justify-center border-gray-950'>
            <div className='w-[80%] h-[90%] bg-[#d8d890] my-10 rounded-lg relative p-3'>
                <button className='absolute bg-[blue] text-white py-3 px-6 rounded-md  '  onClick={toggleModal}>Add New Note</button>

                <div className='my-20 bg-[#808000] rounded-lg shadow p-5 h-[450px] overflow-y-scroll '>
              
                    <div className='grid grid-cols-4 gap-5'>
                            {note.map((res,i)=>(
                                <div className=' bg-white rounded-lg  p-3  flex flex-col gap-3 '>
                                        <p className='font-bold text-2xl'>{res.title}</p>
                                        <p>{res.message}</p>
                                </div>
                            
                            ))}
                    </div>

                </div>

            </div>

         
            {customModal === true?
                (<div className='absolute customModal flex justify-center items-center w-full h-full bg-[#00000089]'>
                    <form className='w-[40%] bg-[#d8d890] p-5 rounded-lg pverflow-hidden'>
                        <div>
                            <label className='font-bold'>Enter Title</label>
                            <input name='title' onChange={(e)=>setTitle(e.target.value)} className='border-2 rounded my-3 py-3 px-2 block w-full' />
                        </div>
                        <div className='mt-6'>
                            <label  className='font-bold'>Enter Message </label>
                            <textarea name="title" onChange={(e)=>setMessage(e.target.value)} className='border-2 rounded my-3 py-3 px-2 block w-full'></textarea>
                        </div>
                        <div className='flex flex-wrap justify-between'>
                            <button className='bg-[blue] text-white py-3 px-6 rounded-md ' onClick={handleSubmit}>Submit</button>
                            <button className='bg-[red] text-white py-3 px-6 rounded-md' onClick={toggleModal}>Cancel</button>
                        </div>
                    </form>
                </div> )
                :
                ""}
        </div>
    </div>
  )
}
