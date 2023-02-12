function MyList() {
   console.log('myList -> render')

   const [listUpdateStamp, setListUpdateStamp] = React.useState(Date.now())
   let stickies
   try {
      stickies = retrieveMyStickies(sessionStorage.email) //get my stickies
      // console.log("these are my stickes",stickies) 
   } catch (error) {
      alert(error.message)
   }


   const handleEditText = event => {
      try {
         updateStickyText(sessionStorage.email, event.target.id, event.target.innerText)

      } catch (error) {
         alert(error.message)
      }
   }

   const handleDelete = event => {
      try {
         deleteSticky(sessionStorage.email, event.target.id)
         setListUpdateStamp(Date.now())
      } catch (error) {
         alert(error.message)
      }
   }

   const handleUpdateVisibility = event => {
      try {
         updateStickyVisibility(sessionStorage.email, event.target.id, event.target.dataset.visibility === 'private' ? 'public' : 'private')
         setListUpdateStamp(Date.now)
      } catch (error) {
         console.log(sessionStorage.email, event.target.id, event.target.dataset.visibility)
         console.log(error);
         alert(error.message)
      }
   }

   const handleLike = event => {
      try {
         toggleLikeSticky(sessionStorage.email, event.target.id)
         setListUpdateStamp(Date.now)
      } catch (error) {
         alert(error.message)

      }
   }

   // function handleUpdateVisibility(sticknote){
   //    if(sticknote.visibility === 'public'){
   //       sticknote.visibility = 'private'
   //    }
   //    else{
   //       sticknote.visibility = 'public'
   //    }
   //    console.log("after change ", sticknote)
   // }


   return <ul className="flex flex-col items-center">
      {stickies.map(sticky =>
         <li className="bg-white m-5 w-[40ch] rounded" key={sticky.id}>
            
            <div className="text-right">
               {sticky.visibility === 'public' ?
                  <button className="p-1 border-[2px] border-[#528AAE] text-[#DB4704] p-1 m-1" id={sticky.id} onClick={handleUpdateVisibility} data-visibility={sticky.visibility}>{sticky.visibility}</button>
                  :
                  <button className="p-1 border-[2px] border-[#528AAE] text-[#DB4704] p-1 m-1" id={sticky.id} onClick={handleUpdateVisibility} data-visibility={sticky.visibility}>{sticky.visibility}</button>
               }
               <button className="p-1 border-[2px] border-[#528AAE] text-[#DB4704] p-1 m-1" id={sticky.id} onClick={handleDelete}>X</button>
            </div>
            <p id={sticky.id} contentEditable onKeyUp={handleEditText} suppressContentEditableWarning={true}>{sticky.text}</p>


            <div className="text-right">
               <img className="h-5 float-right"
                  src={sticky.likes.includes(sessionStorage.email) ? 'public/heart-full.svg' : 'public/heart.svg'}
                  onClick={handleLike} id={sticky.id} title={sticky.likes.join('\n')} /> <p>{sticky.likes.length}</p>
               <strong>{sticky.user}</strong>
            </div>

         </li>)}

   </ul>
}


//    return <ul className='list-panel'>
//       {stickies.map(sticky => <li key={sticky.id}>
//             {sticky.visibility === 'public' ?
//                <button id={sticky.id} onClick={() => {sticky.visibility = 'public'}} data-visibility={sticky.visibility}>Public</button>
//                :
//                <button id={sticky.id} onClick={() => handleUpdateVisibility(sticky)} data-visibility={sticky.visibility}>Priv</button>
//             }
//             <button id={sticky.id} onClick={handleDelete}>X</button>

//             <p id={sticky.id} contentEditable onKeyUp={handleEditText} suppressContentEditableWarning={true}>{sticky.text}</p>

//             <strong>{sticky.user}</strong>
//          </li>)}

//       </ul>
// }