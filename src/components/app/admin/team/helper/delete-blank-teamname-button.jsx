import React from 'react'
import { Button } from '@material-ui/core'

const DeleteDocsWithBlankTeamNames = () => {

    const handleDelete = () => {
    }
    return (
        <div>
            <Button color='secondary' onClick={handleDelete}>Delete Team Name Blanks</Button>
        </div>
    )
}

export default DeleteDocsWithBlankTeamNames;
