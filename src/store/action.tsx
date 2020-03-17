
interface Event {
    id: number,
    title: string,
    place: string,
    email: string
}
interface Events {
    type: 'CHANGE',
    payload: {
        id: number,
        title: string,
        place: string,
        email: string
    }
}
export const addEvents = (object: any): any => {
    return {
        type: 'CHANGE',
        payload: { object }
    }
}

export type ActionTypes = Events