import React from 'react';
import {Footer, Header} from "../index";
import './PageTemplate.scss';

const PageTemplate = ({children}) => {
    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
};

export default PageTemplate;