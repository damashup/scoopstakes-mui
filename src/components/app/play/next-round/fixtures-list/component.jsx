import React from 'react'
import FixtureItem from './fixture-item';

const FixtureListComponent = ({results}) => {
    
    return (results ? results.map(result => (<FixtureItem result={result} key={result.id} />)) : 'Awaiting results...' )}    
    
export default FixtureListComponent;