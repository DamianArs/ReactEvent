import { ActionTypes } from './action'
const initialState = {
    events: [
        { id: 1, title: 'Jeden', place: 'First', email: 'jeden@wp.pl' }
    ]
}

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                events: [...state.events, action.payload.object]
            }
    }
    return state
}