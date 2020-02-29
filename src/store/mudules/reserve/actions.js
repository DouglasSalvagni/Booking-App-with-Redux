export function addReserveRequest(id) {
    return {
        type: 'ADD_RESERVE_REQUEST',
        id,
    }
}

export function addReserveSuccess(trip) {
    return {
        type: 'ADD_RESERVE_SUCCESS',
        trip,
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