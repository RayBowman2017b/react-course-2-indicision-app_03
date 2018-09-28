

//  sec006c_SFC_header.jsx

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_006_Webpack\react-course-proj-01\Indecision-app-01\src\sec006c_components\sec006c_SFC_header.jsx


//  SEC_006 --- 55. One Component per File 18:12


import React from 'react';

//#########################################################

//  import SFC_Header from './sec006c_components/sec006c_SFC_header.jsx';

//  SEC_007 --- 62. Bonus: Refactoring Other Stateless Functional Components 2:25

//  SEC_005 --- 40. The Stateless Functional Component 13:47

//  [S07251660|a01_Directory_01.txt::DRC1: GC_SFC_Header <1>^B]

//  [S07251659|sec006c_IndecisionApp.jsx::TPL1: GC_SFC_Header <1>]

const GC_SFC_Header = (P_props) =>
(
//  <h1>Indecision</h1>
//  SEC_004 --- 28. Component Props 13:34
//  SEC_008 --- 65. Architecture and Header Styles 14:48

<div className="header">
<div className="container">
  <h1 className="header__title">{P_props.title}</h1>
  { P_props.subtitle && <h2 className="header__subtitle">{P_props.subtitle}</h2> }
</div>
</div>
);

GC_SFC_Header.defaultProps =
{
  title: '(default title)'
}

//#########################################################


//  import SFC_Header from './sec006c_components/sec006c_SFC_header.jsx';

export default GC_SFC_Header;

//#########################################################
//#########################################################
