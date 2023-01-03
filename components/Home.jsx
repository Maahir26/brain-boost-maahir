import React from 'react'
import styles from './common.module.css'
import SDK from "weavedb-sdk"
import { Buffer } from "buffer"
import { ethers } from "ethers"

const Home = () => {
    let db
    const [questions, setQuestions] = React.useState([])
    const contractTxId = "h47DIhGfBlrWkl565ZAxQiY_yjTYOWctxSdmLzGGcTM";

    const setupWeaveDB = async () => {
        window.Buffer = Buffer
        db = new SDK({
            contractTxId
        })
        await db.initializeWithoutWallet()
    }

    const getQuestions = async () => {
        setQuestions(await db.cget("Questions", [question]))
        let the = await db.cget("Questions", [question])
    }

    return (
        <div className='lg:grid flex flex-col lg:grid-cols-5 mt-10 '>

            <div className={styles.grid1}>
                <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-violet-600 text-3xl flex justify-center mb-5'>Questions</h2>
                <div className='text-white mb-5 '>
                    {questions.map((the) =>
                        <div className="mx-8 my-2 space-y-4 flex flex-row justify-start items-center space-x-4 p-5 text-xl font-medium bg-gradient-to-l from-sky-600 to-indigo-600 rounded-xl drop-shadow-xl">
                            <div className='bg-transparent'>Title : </div>
                        </div>
                    )}
                </div>
            </div>


            <div className={styles.grid2}>
                <h2 className='text-3xl bg-zinc-900 flex justify-center p-screen bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-violet-600'>Leaderboard</h2>
                <div className='mb-5 '>
                    <div className="bg-white flex justify-center flex-row m-4 space-x-4 p-4 text-xl font-medium rounded-xl drop-shadow-xl bg-gradient-to-r from-violet-700 to-fuchsia-800">
                        <div className='bg-transparent text-white'></div>
                        <h2 className='bg-transparent text-white rounded-xl'>Score</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home