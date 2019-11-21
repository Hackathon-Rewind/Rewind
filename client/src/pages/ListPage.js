import React from 'react';
import {PageTemplate} from "../components/common";
import {ListSort, MissList} from "../components/list";
import Pagination from "../components/list/Pagination";

const ListPage = () => {
    return (
        <PageTemplate>
            <div className="container">
                <ListSort/>
                <MissList/>
                <Pagination/>
            </div>
        </PageTemplate>
    )
};

export default ListPage;