import React, { useState, useEffect } from 'react'
import PrintCard from './PrintCard'
import API from '../API'

export default function PrintsContainer() {
    const [printsCollection, setPrintsCollection] = useState([])

    // useEffect(()=> {
    //     API.getPrintsCollection().then(resp => setPrintsCollection(resp))
    //     return (() => setPrintsCollection([]))              
    // }, [])
    
    const renderAllPrints = () => printsCollection.map(print => <PrintCard key={print.id}/>)
    
    return (
        <div className="prints_container">
            < PrintCard />
        </div>
    )
}