import React from 'react';
import {PageTemplate} from "../components/common";
import {ListSort, MissList} from "../components/list";

const ListPage = () => {
    return (
        <PageTemplate>
            <div className="container">
                <ListSort/>
                <MissList/>
            </div>
        </PageTemplate>
    )
};

export default ListPage;