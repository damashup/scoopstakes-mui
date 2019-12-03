import {generate} from 'shortid';

export const INITIAL_ROUND_VALUES = { 
    actual_first_goal: '', 
    deadline_time: '', 
    first_ko_time: '',
    matchday: [], 
    round_no: '',
    round_status: 'scheduled',
    results: [{
                uid: generate(),
                id: '1',
                competition: 'Premier League', 
                koTime: '', 
                homeTeam: '',
                awayTeam: ''}],
    sport: '',
    uid: '',
};