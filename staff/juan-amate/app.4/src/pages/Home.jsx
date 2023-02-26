import { useState } from 'react'
import createSticky from '../logic/create-sticky'
import List from '../components/List'
import Profile from '../components/Profile'
import MyList from '../components/MyList'

function Home(props) {
    // console.log('Home -> render')

    const [view, setView] = useState('list')
    const [listUpdateStamp, setListUpdateStamp] = useState(Date.now())
    // const (updateText, setUpdateText) = React.useState('')

    const handleShowProfile = event => {
        event.preventDefault()

        setView('profile')
    }

    const handleShowList = event => {
        event.preventDefault()

        setView('list')
    }

    const handleShowMyList = event => {
        event.preventDefault()

        setView('my-list')
    }

    const handleAdd = () => {
        try {
            createSticky(sessionStorage.userId, '', 'public')

            setListUpdateStamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    const handleLogout = () => {
        delete sessionStorage.userId

        props.onLogout()
    }

    return <div className="bg-white h-screen">
        <header className="flex justify-between p-2 bg-white fixed top-0 left-0 w-full">
            <a onClick={handleShowList} className="logo-link" href=""><img className="w-16" src="images/mylogo.png" alt="logo" /></a>

            <nav className="flex items-center gap-2">
                <a onClick={handleShowMyList} className="text-gray-500 hover:underline cursor-pointer font-quicksand" href="">My stickies</a>
                <a onClick={handleShowProfile} className="text-gray-500 hover:underline cursor-pointer font-quicksand" href="">Profile</a>
                <button onClick={handleLogout} className="bg-blue-600 text-white font-quicksand border border-gray-400 p-1 rounded-md pointer">Logout</button>
            </nav>
        </header>

        <main className="bg-blue-50 py-20 min-h-screen">
            {view === 'list' && <List updateStamp={listUpdateStamp} />}

            {view === 'profile' && <Profile />}

            {view === 'my-list' && <MyList updateStamp={listUpdateStamp} />}
        </main>

        <footer className="bg-white flex justify-center items-center fixed bottom-0 left-0 w-full">
            <button onClick={handleAdd} className="bg-blue-600 text-white font-semibold border border-gray-400 m-5 rounded-md h-10 w-10">+</button>
        </footer>
    </div>
}

export default Home