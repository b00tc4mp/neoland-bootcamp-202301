function MyList() {
    console.log('MyList -> render')

    const [listUpdateStamp, setListUpdateStamp] = React.useState(Date.now())

    let stickies

    try {
        stickies = retrieveMyStickies(sessionStorage.email)
    } catch (error) {
        alert(error.message)
    }

    const handleUpdateText = event => {
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
        } catch (error) {
            alert(error.message)
        }
    }

    return <ul className="list-panel">
        {stickies.map(sticky => <li key={sticky.id}>
            {sticky.user === sessionStorage.email && <button id={sticky.id} data-visibility={sticky.visibility} onClick={handleUpdateVisibility}>🚦</button>}

            {sticky.user === sessionStorage.email && <button id={sticky.id} onClick={handleDelete}>❌</button>}

            <p id={sticky.id} contentEditable={sticky.user === sessionStorage.email} onKeyUp={handleUpdateText} suppressContentEditableWarning={true}>{sticky.text}</p>

            <strong>{sticky.user}</strong>
        </li>)}
    </ul>
}


// function Me() {
//     console.log('Me -> render')

//     const [listUpdateStamp, setListUpdateStamp] = React.useState(Date.now())

//     let stickies

//     try {
//         stickies = retrieveMyStickies()

//         console.log(stickies)
//     } catch (error) {
//         alert(error.message)
//     }

//     const handleUpdateText = event => {
//         try {
//             updateStickyText(sessionStorage.email, event.target.id, event.target.innerText)
//         } catch (error) {
//             alert(error.message)
//         }
//     }

//     const handleDelete = event => {
//         try {
//             deleteSticky(sessionStorage.email, event.target.id)

//             setListUpdateStamp(Date.now())
//         } catch (error) {
//             alert(error.message)
//         }
//     }

//     const handleUpdateVisibility = event => {
//         try {
//             updateStickyVisibility(sessionStorage.email, event.target.id, event.target.dataset.visibility === 'public' ? 'private' : 'public')
//             setListUpdateStamp(Date.now())
//         } catch (error) {
//             alert(error.message)
//         }
//     }

//     return <ul className="list">

//         {stickies.map(sticky => <li key={sticky.id}>
//             {sticky.user === sessionStorage.email && <button onClick={handleUpdateVisibility}>🚦</button>}

//             {sticky.user === sessionStorage.email && <button id={sticky.id} onClick={handleDelete}>❌</button>}

//             <p id={sticky.id} contentEditable={sticky.user === sessionStorage.email} onKeyUp={handleUpdateText}>{sticky.text}</p>

//             <strong>{sticky.user}</strong>
//         </li>)}
//     </ul>
// }