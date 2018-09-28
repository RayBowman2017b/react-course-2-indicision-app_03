

//  sec006c_SFC_option.jsx

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_006_Webpack\react-course-proj-01\Indecision-app-01\src\sec006c_components\sec006c_SFC_option.jsx


//  SEC_006 --- 55. One Component per File 18:12


import React from 'react';

//#########################################################

//  import SFC_Option from './sec006c_components/sec006c_SFC_option.jsx';


//  SEC_007 --- 62. Bonus: Refactoring Other Stateless Functional Components 2:25

//  SEC_005 --- 40. The Stateless Functional Component 13:47

//  SEC_004 --- 27. Nesting Components 5:43


//  [S07251660|a01_Directory_01.txt::DRC1: GC_SFC_Option <1>]

//  [S07251659|sec006c_SFC_options.jsx::TPL1: SFC_Option <1>^B]

const GC_SFC_Option = (P_props) =>
(

//  SEC_004 --- 28. Component Props 13:34
  //      <div>Option component here</div>
//      <div>{this.props.option}</div>
//  SEC_005 --- 43. Removing Individual Options 16:22


      <div className="option">
      <p className="option__text">OPTION # {P_props.count}: {P_props.optionText}</p>
        <button
          className="std-button std-button--link"
          onClick={ (P_event) => 
            P_props.BTN_click_delete_an_option (P_props.optionText)
//[S07251659|sec006c_IndecisionApp.jsx::EXE1: BTN_click_INDC_delete_an_option <1>^B]
                  }
        >remove
        </button>
      </div>
);
//#########################################################

//  import SFC_Option from './sec006c_components/sec006c_SFC_option.jsx';

export default GC_SFC_Option;

//#########################################################
