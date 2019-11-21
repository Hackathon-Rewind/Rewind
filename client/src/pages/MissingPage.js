import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {PageTemplate} from "../components/common";
import MissPost from "../components/list/MissPost";

const MissingPage = ({ match }) => {
    // const [detail, setDetail] = useState({});
    // const getDetail = async () => {
    //     const result = await Axios.get(`http://172.26.0.34:8000/missing/list/${match.params.id}/`);
    //     if(!result.data) {
    //         setDetail(null);
    //         return;
    //     }
    //
    //     setDetail(result.data);
    // };
    //
    // useEffect(() => {
    //     getDetail();
    // }, []);``


    return (
        <PageTemplate>
            <div className="container">
                {/*{JSON.stringify(detail)}*/}
                <MissPost/>
            </div>
        </PageTemplate>
    )
};

export default MissingPage;