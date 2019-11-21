import React from 'react';
import {PageTemplate} from '../components/common';
import {ApplyBody, ApplyComponent} from "../components/Apply";

const ApplyPage = () => {
    return (
        <PageTemplate>
            <div className="container">
                {/*<ApplyComponent/>*/}
                <ApplyBody/>
            </div>
        </PageTemplate>
    );
};

export default ApplyPage;