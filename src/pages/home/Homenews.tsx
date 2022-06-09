import React from 'react';
import Today from '../../components/home/Today';
import Opinion from '../../components/home/Opinion';
import Sport from '../../components/home/Sport';
import Lifestyle from '../../components/home/Lifestyle';
import Culture from '../../components/home/Culture';
const Homenews = () => {
    return (
        <div>
            <Today></Today>
            <Opinion></Opinion>
            <Sport></Sport>
            <Lifestyle></Lifestyle>
            <Culture></Culture>
        </div>
    );
};

export default Homenews; 