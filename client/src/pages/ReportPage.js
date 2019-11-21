import React from 'react';
import PageTemplate from "../components/common/PageTemplate";
import {ReportComponent} from "../components/Report";

const ReportPage = () => {
    return (
        <PageTemplate>
            <div className="container">
                <ReportComponent/>
            </div>
        </PageTemplate>
    )
};

export default ReportPage;