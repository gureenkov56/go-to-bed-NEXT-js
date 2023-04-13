import Link from 'next/link'
import { useState } from 'react'
import { createContext } from 'react';

import MetaHead from '../components/MetaHead'
import PerfectWakeUpTime from '../components/PerfectWakeUpTime'
import Graphic from '../components/Graphic'
import Posts from '../components/Posts'
import Footer from '../components/Footer'
import Modal from '../components/Modal'

export const MyContext = createContext()

function Index() {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <MetaHead title={'Расчитать циклы сна'} />

            <MyContext.Provider value={[counter, setCounter]}>
                <div class="content-container">
                    <PerfectWakeUpTime />

                    {/* <Graphic />

                    <Posts />

                    <Footer /> */}
                </div>
                <Modal />
            </MyContext.Provider>

        </>
    )
}

export default Index