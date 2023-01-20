import React from "react";
import './brand.css';
import {google,slack,atlassian,dropbox,shopify} from './imports'

const Brand =()=>{
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img src={google} alt="google"></img>
                <img src={slack} alt="google"></img>
                <img src={atlassian} alt="google"></img>
                <img src={dropbox} alt="google"></img>
                <img src={shopify} alt="google"></img>

            </div>
        </div>
    )
}
export default Brand;