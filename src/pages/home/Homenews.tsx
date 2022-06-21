import React,{useEffect} from 'react';
import Today from '../../components/home/Today';
import Opinion from '../../components/home/Opinion';
import Sport from '../../components/home/SportLaptopView';
import Lifestyle from '../../components/home/Lifestyle';
import Culture from '../../components/home/Culture';
import { useDispatch ,useSelector } from "react-redux";
import {getAllPosts} from '../../redux/actions/postsAction'
import CultureSection from '../../components/home/CultureSection';
import TodaySection from '../../components/home/TodaySection';
import OpinionSection from '../../components/home/OpinionSection'
import SportSection from '../../components/home/SportSection';
import LifestyleSection from '../../components/home/LifestyleSection';
import Weather from '../../components/home/Weather';
import SearchCategory from '../../components/header/SearchCategory';
import { QuotePaper } from '../../styled/styledPaper';
const Homenews = () => {

    const dispatch:any=useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
      },[dispatch]);

    


    return (
        <>
   
         <TodaySection></TodaySection> 
<OpinionSection></OpinionSection>
<SportSection></SportSection>
<LifestyleSection></LifestyleSection>
<CultureSection></CultureSection>


{/* <QuotePaper>dfghjhgf</QuotePaper> */}
        </>
    );
};

export default Homenews; 