
//  sec006c_SFC_options.jsx

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_006_Webpack\react-course-proj-01\Indecision-app-01\src\sec006c_components\sec006c_SFC_options.jsx


//  SEC_006 --- 55. One Component per File 18:12


import React from 'react';
import SFC_Option from './sec006c_SFC_option.jsx';

//#########################################################

//  import SFC_Options from './sec006c_components/sec006c_SFC_options.jsx';


//  SEC_007 --- 62. Bonus: Refactoring Other Stateless Functional Components 2:25

//  SEC_005 --- 40. The Stateless Functional Component 13:47

//  SEC_004 --- 29. Events & Methods 10:34

//  [S07251660|a01_Directory_01.txt::DRC1: GC_SFC_Options <1>^B]

//  [S07251659|sec006c_IndecisionApp.jsx::TPL1: GC_SFC_Options <1>^B]

const GC_SFC_Options = (P_props) =>
(
//  SEC_004 --- 27. Nesting Components 5:43
//  SEC_004 --- 28. Component Props 13:34
      <div>
{/* Options component here */}
{/*//  SEC_004 --- 36. Indecision State: Part I 17:06  */}
{/*<div><button onClick={this.BTN_click_remove_all}>REMOVE ALL</button></div>*/}
{/*//  SEC_008 --- 69. Styling the Options List 14:13 */}
<div className="widget-header">
  <h3 className="widget-header__title">Your Options</h3>
  {/*  [S07251659|sec006c_IndecisionApp.jsx::EXE1: BTN_click_INDC_delete_options <1>^B]  */}
  <button
    className="std-button std-button--link"
    onClick={P_props.BTN_click_INDC_delete_options}
  >REMOVE ALL
  </button>
</div>
  {
    P_props.options.length === 0
      && <p className="widget__message">Please add an option to get started!</p>
  }

    {/*
//  SEC_005 --- 43. Removing Individual Options 16:22
//  [S07251659|sec006c_SFC_option.jsx::TPL1: SFC_Option <1>^B]
//  [S07251659|sec006c_IndecisionApp.jsx::ASN2: BTN_click_INDC_delete_an_option <1>^B]
      */}
      {
        P_props.options.map ( (P_option, P_index) =>
              <SFC_Option
                key={P_option + '_map'}
                optionText={P_option}
                count={P_index + 1}
                BTN_click_delete_an_option={P_props.BTN_click_INDC_delete_an_option}
              />
            )
      }
      </div>
);
//#########################################################

//  import SFC_Options from './sec006c_components/sec006c_SFC_options.jsx';

export default GC_SFC_Options;

