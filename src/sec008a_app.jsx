
//  sec008a_app.jsx

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_007_Using_a_Third-Party_Component\react-course-proj-01\Indecision-app-01\src\sec007a_app.jsx

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_008_Styling_React\proj_01\Indecision-app\src\sec008a_app.jsx

//  ================================================================
//  ================================================================


//  ----------------------------------------------------------------

console.log (" sec008a_app.jsx is running!");

//#########################################################

//  SEC_006 --- 55. One Component per File 18:12

import React from 'react';
import ReactDOM from 'react-dom';

import Cls_IndecisionApp from './sec006c_components/sec006c_IndecisionApp.jsx';

import Cls_Counter from './sec006c_components/sec006c_counter.jsx';


//  SEC_008 --- 66. Reset That $#!* 4:58

import 'normalize.css/normalize.css';

//  SEC_008 --- 64. Setting up Webpack with SCSS 13:16

import './styles/styles.scss';


//require('../assets/images/favicon.ico');
require('../public/images/favicon.png');
//import '../public/images/favicon.png';

//#########################################################
//#########################################################

//  SEC_004 --- 27. Nesting Components 5:43

const GC_appRoot_01 = document.getElementById('sec008_app_01');
      //[S07251662|index.html::getElementById('sec008_app_01'); ref1;^B]

 //  [S07251660|a01_Directory_01.txt::DRC1: ReactDOM.render Cls_IndecisionApp^B]

ReactDOM.render
      (<Cls_IndecisionApp />,
       GC_appRoot_01);

//#########################################################
//#########################################################

/**********************************************

const GC_appRoot_02 = document.getElementById('sec004_app_02');

//  SEC_005 --- 41. Default Prop Values 9:49

ReactDOM.render (<Cls_Counter count={33}/>, GC_appRoot_02);
  ReactDOM.render (<Cls_Counter />, GC_appRoot_02);

 **********************************************/

//=========================================================

//#########################################################
//#########################################################


//#########################################################

//  SEC_007 --- 60. Passing Children to Component 6:25

/**********************************************

const GC_SFC_layout_01 = (P_props) =>
{
     return (
<div>
  <p>header</p>
  {P_props.content}
  <p>footer</p>
</div>
            );
}
 **********************************************/

//#########################################################

//  SEC_007 --- 60. Passing Children to Component 6:25

/**********************************************

const GC_SFC_layout_02 = (P_props) =>
{
     return (
<div>
  <p>header</p>
  {P_props.children}
  <p>footer</p>
</div>
            );
}
 **********************************************/

//#########################################################

//  SEC_007 --- 60. Passing Children to Component 6:25

/**********************************************

const GC_template = (
<div>
  <h1>Page Title</h1>
  <p>This is my page</p>
</div>
 );
 **********************************************/

//#########################################################
//#########################################################

/**********************************************

const GC_sec007_app_01 = document.getElementById('sec007_app_01');

//  SEC_007 --- 60. Passing Children to Component 6:25

  ReactDOM.render
        (<GC_SFC_layout_01 content={GC_template}/>,
         GC_sec007_app_01);
 **********************************************/

//#########################################################

/**********************************************

const GC_sec007_app_02 = document.getElementById('sec007_app_02');

//  SEC_007 --- 60. Passing Children to Component 6:25

ReactDOM.render
      (
        (<GC_SFC_layout_02>
<div>
  <h1>Page Title</h1>
  <p>This is my page</p>
</div>
         </GC_SFC_layout_02>),
       GC_sec007_app_02);
 **********************************************/

//#########################################################

//#########################################################
//#########################################################
