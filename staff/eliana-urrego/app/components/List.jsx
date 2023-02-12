function List() {
    console.log('list -> render')

    const [listUpdateStamp, setListUpdateStamp] = React.useState(Date.now())

    let stickies

    try {
        stickies = retrievePublicStickies()
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
            updateStickyVisibility(sessionStorage.email, event.target.id, event.target.dataset.visibility === 'public' ? 'private' : 'public')
            setListUpdateStamp(Date.now())
        }catch (error) {
            alert(error.message)
        }
    }

    const handleLike = event => {
        try {
            toggleLikeSticky(sessionStorage.email, event.target.id)
            setListUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    return <ul className="list-panel">
        {stickies.map(sticky => 
        <li key={sticky.id}>

          {/* {
            sticky.user===sessionStorage.email ?
            <p id={sticky.id} contentEditable onKeyUp={handleEditText} suppressContentEditableWarning={true}>
            {sticky.text}</p> :
            <p id={sticky.id}>{sticky.text}</p>
          } */}
         
         {/* <p id={sticky.id} contentEditable={sticky.user=== sessionStorage.email? true:false} onKeyUp={handleEditText} suppressContentEditableWarning={true}>
            {sticky.text}
            </p> */}
            <div className="button-position">
            {sticky.user === sessionStorage.email &&
            <button className="button-sticky" id={sticky.id} onClick={handleUpdateVisibility} data-visibility={sticky.visibility}>{sticky.visibility}</button> }
            {sticky.user === sessionStorage.email &&
            <button className="button-sticky" id={sticky.id} onClick={handleDelete}>X</button> }
            </div>
            <p id={sticky.id} contentEditable={sticky.user=== sessionStorage.email} onKeyUp={handleEditText} suppressContentEditableWarning={true}>
            {sticky.text}
            </p>
            
              <div >
              <img className="img-likes"
              src={sticky.likes.includes(sessionStorage.email)? 'public/heart-full.svg': 'public/heart.svg'}
              onClick={handleLike} id={sticky.id} title={sticky.likes.join('\n')}/><p>{sticky.likes.length}</p>
              
              </div>
              <strong>{sticky.user}</strong>
        </li>)}
      </ul>
      
}

//     return <ul className="list-panel">
//         {stickies.map(sticky => <li key={sticky.id}>
// {/* 
//             <div className="menu">
//                 {sticky.user === sessionStorage.email && <button id={sticky.id} data-visibility={sticky.visibility} onClick={handleUpdateVisibility}>{sticky.visibility === 'public' ? '-' : '+'}</button>}

//                 {sticky.user === sessionStorage.email && <button id={sticky.id} onClick={handleDelete}>x</button>}
//             </div> */}

//         {sticky.user === sessionStorage.email && 
//             <button id={sticky.id} data-visibility={sticky.visibility} onClick={handleUpdateVisibility}>{sticky.visibility === 'public' ? '-' : '+'}</button>}

//         {sticky.user === sessionStorage.email && <button id={sticky.id} onClick={handleDelete}>x</button>}
            
//         <p id={sticky.id} contentEditable={sticky.user === sessionStorage.email}
//                 onKeyUp={handleUpdateText}
//                 suppressContentEditableWarning={true}>{sticky.text}
//         </p>
    

//             <strong>{sticky.user}</strong>
//             <div>
//             <img
//                     src={sticky.likes.includes(sessionStorage.email) ? "public/heart-full.svg" : "public/heart.svg"}
//                     onClick={handleLike} id={sticky.id}
//                 />
//             </div>
//         </li>)}
//     </ul>
// }