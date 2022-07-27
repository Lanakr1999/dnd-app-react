import React, {useContext, useEffect, useState} from 'react';
import './Classes.scss';
import http from "../../http";
import {Context} from "../Context";
import ClassModal from "./ClassModal";

const Classes = () => {

    const { classesList, setClassesList } = useContext(Context);
    const [classUrl, setClassUrl] = useState('');
    const [isClassActive, setIsClassActive] = useState(false);

    const getClasses = () => {
        http.get(`/api/classes`).then(res => {
            console.log(res.data.results);
            setClassesList(res.data.results);
        })
    }
    const getOneClassInfo = (url) => {
        http.get(url).then(res => {
            setClassUrl(res.data);
            setIsClassActive(true);
            console.log(res.data);
        });
    }
    useEffect(() => {
        getClasses();
    }, []);

    return (
        <div className='classes-container'>
            {Object.keys(classesList).map(oneClass =>
                <div
                    onClick={() => getOneClassInfo(classesList[oneClass].url)}
                    key={classesList[oneClass].index}
                >{classesList[oneClass].name}</div>
            )}
            <ClassModal classUrl={classUrl} isClassActive={isClassActive}></ClassModal>
        </div>
    );
};

export default Classes;