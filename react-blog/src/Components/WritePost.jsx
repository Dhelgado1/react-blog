import './writePost.css'

export default function WritePost() {
  return (
    
    <div className='write'>
      <img src="https://i.pinimg.com/564x/53/de/16/53de166012eb783805fffde724a16347.jpg" alt="" className="C" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput" >
                <i class="writeFormIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeHolder="Title" className='writeInput' 
                autoFocus= {true}/>
            </div>
            <div className="writeFormGroup">
                <textarea
                placeholder='Tell your story...'
                type="text"
                className='writeInput writeText'
                ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>




            </form></div>
  )
}