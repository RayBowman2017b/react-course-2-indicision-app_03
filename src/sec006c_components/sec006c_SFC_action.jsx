

//  sec006c_SFC_action.jsx

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_006_Webpack\react-course-proj-01\Indecision-app-01\src\sec006c_components\sec006c_SFC_action.jsx


//  SEC_006 --- 55. One Component per File 18:12


import React from 'react';

//#########################################################

//  import SFC_Action from './sec006c_components/sec006c_SFC_action.jsx';

//  SEC_007 --- 62. Bonus: Refactoring Other Stateless Functional Components 2:25

//  SEC_005 --- 40. The Stateless Functional Component 13:47

//  [S07251660|a01_Directory_01.txt::DRC1: GC_SFC_Action <1>^B]

//  [S07251659|sec006c_IndecisionApp.jsx::TPL1: GC_SFC_Action <1>^B]

const GC_SFC_Action = (P_props) =>
(
//  SEC_004 --- 36. Indecision State: Part I 17:06

     //  [S07251660|a01_Directory_01.txt::DRC2: BTN_click_INDC_handle_pick <1>^B]
//  [S07251659|sec006c_IndecisionApp.jsx::EXE1: BTN_click_INDC_handle_pick <1>^B]

        <div>
          <button
            className="big-button"
            disabled={ ! P_props.hasOptions }
            onClick={P_props.BTN_click_INDC_handle_pick}>
                What should I do?
          </button>
        </div>
);
//#########################################################

//  import SFC_Action from './sec006c_components/sec006c_SFC_action.jsx';

export default GC_SFC_Action;

//#########################################################
