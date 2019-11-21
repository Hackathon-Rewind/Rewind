import React from 'react';
import {PageTemplate} from '../components/common';
import ApplyComponent from '../components/Apply/ApplyComponent';

const ApplyPage = () => {
    return (
        <PageTemplate>
            <div className="container">
                <ApplyComponent/>
            </div>
        </PageTemplate>
    );
};

export default ApplyPage;