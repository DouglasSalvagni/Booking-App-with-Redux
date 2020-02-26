export function addReserve(trip) {
    return {
        type: 'ADD_RESERVE',
        trip
    }
}

export function removeReserve(id) {
    return {
        type: 'REMOVE_RESERVE',
        id,
    }
}

export function updatetAmountReserve(id, amount) {
    return {
        type:'UPDATEAMOUNT_RESERVE',
        id,
        amount
    }
}