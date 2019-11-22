import React from 'react';
import { Typography } from '@material-ui/core';

const SectionTitle = ({subtitle, match}) => {
    return (
        <div><Typography variant='h3' color='primary'>{subtitle} </Typography></div>
        )};

export default SectionTitle;
