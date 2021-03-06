import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING,
} from './constants';

import * as reducers from './reducers';

describe('search robots', () => {
    const initialStateSearch = {
        searchField: ''
    }
    it('should return initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch)
    })

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateSearch,
            { type: CHANGE_SEARCHFIELD, payload: 'abc' }))
            .toEqual({ searchField: 'abc' })
    })
})

describe('request robots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false,
    }

    it('should return initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots,
            { type: REQUEST_ROBOTS_PENDING }))
            .toEqual({ robots: [], isPending: true })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        const robots = [{
            id: 1,
            name: 'jsakd',
            email: 'sajdh@gmail.com'
        }]
        expect(reducers.requestRobots(initialStateRobots,
            { type: REQUEST_ROBOTS_SUCCESS, payload: robots }))
            .toEqual({ robots: robots, isPending: false })
    })

    it('should handle REQUEST_ROBOTS_FAILED', () => {
        const error = 'ERROR!';
        expect(reducers.requestRobots(initialStateRobots,
            { type: REQUEST_ROBOTS_FAILED, payload: error }))
            .toEqual({ robots: [], error: error, isPending: false })
    })
})