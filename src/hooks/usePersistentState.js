import { useState, useEffect } from 'react'

function saveToStorage(value, id) {
    localStorage.setItem(id, JSON.stringify(value))
}

function loadFromStorage(id) {
    return JSON.parse(localStorage.getItem(id))
}

function usePersistentState(initialValue, stateId) {
    const [value, setValue] = useState(() => {
        return loadFromStorage(stateId) || initialValue
    })

    useEffect(() => {
        saveToStorage(value, stateId)
    }, [value])

    return [value, setValue]
}

export default usePersistentState
