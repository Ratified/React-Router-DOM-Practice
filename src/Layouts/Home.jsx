import React from 'react'
import Paragraph from '../components/Paragraph'

const Home = () => {
  return (
    <>
        <main>
            <Paragraph username='George' />
            <h2>Home Page</h2>
            <p>This is a simple home page for demonstration purposes.</p>
            <p>Feel free to customize this page and add more content as needed.</p>
        </main>

        <footer>
            <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
    </>
  )
}

export default Home
