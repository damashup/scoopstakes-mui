import React from 'react'
import Fixture from './fixture';

const FixtureListComponent = ({results}) => {
    
    return (results ? results.map(result => (<Fixture result={result} key={result.id} />)) : 'Awaiting results...' )}    
    
export default FixtureListComponent;