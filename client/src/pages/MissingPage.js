import React from 'react';
import {PageTemplate} from "../components/common";

const MissingPage = ({ match }) => {
    console.log(match);
    return (
        <PageTemplate>
            <div className="container">
                { match.params.id }
            </div>
        </PageTemplate>
    )
};

export default MissingPage;