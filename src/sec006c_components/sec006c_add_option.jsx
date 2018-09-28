
//  sec006c_add_option.js


//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections
//  \SEC_006_Webpack\react-course-proj-01\Indecision-app-01\src\sec006c_components\sec006c_add_option.js


//  SEC_006 --- 55. One Component per File 18:12

       //  [ CLS1: Cls_AddOption <1>]

import React from 'react';


//#########################################################

//  import Cls_AddOption from './sec006c_components/sec006c_add_option.js';


//  SEC_004 --- 29. Events & Methods 10:34

//class Cls_AddOption extends React.Component

       //  [S07251660|a01_Directory_01.txt::DRC1: Cls_AddOption <1>^B]

       //  [S07251659|sec006c_IndecisionApp.jsx::TPL1: Cls_AddOption <1>^B]

           //[ CLS1: Cls_AddOption <1>^B]
export default class Cls_AddOption extends React.Component
{

       //  [ DEF1: FORM_submit_add_option <1>]


       //  [ DEF1: Cls_AddOption render <1>]

    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////


//  SEC_006 --- 58. ES6 class properties 17:33

    //[ state s1;]
    //[ state a2;]
    //[ state xxx]
    state =
    {
      error: undefined
    }

//=========================================================

//  SEC_006 --- 58. ES6 class properties 17:33
//  constructor no longer needed

/**********************************************************************

  constructor (P_props)
  {
    super(P_props);

//  SEC_004 --- 37. Indecision State: Part II 14:33
    this.FORM_submit_add_option = this.FORM_submit_add_option.bind(this);

    this.state =
    {
      error: undefined
    }
    
  }

 **********************************************************************/

//=========================================================
//=========================================================

//  SEC_004 --- 37. Indecision State: Part II 14:33

//  SEC_006 --- 58. ES6 class properties 17:33
//  FORM_submit_add_option (P_event)

       //  [S07251660|a01_Directory_01.txt::DRC1: FORM_submit_add_option <1>^B]

       //[ ASN1: FORM_submit_add_option <1>]

       //[ DEF1: FORM_submit_add_option <1>^B]
  FORM_submit_add_option = (P_event) =>
  {
    P_event.preventDefault();

//  SEC_006 --- 56. Source Maps with Webpack 5:16
//            TEST CASE
//    console.log (undefined_var);

        //[S07251660|a01_Directory_01.txt::NPT_selected_option drc-1;]
    let L_option = P_event.target.elements.NPT_selected_option.value.trim();
                                       //[ NPT_selected_option s1;]
                                       //[ NPT_selected_option clr-1;]
                                       //[ NPT_selected_option xxx]


    //  This is handled in the function being called, so no longer needed here.
    //if (L_option)
    {
        //alert (L_option);
        const L_error = this.props.FORM_submit_INDC_add_option (L_option);
          //[S07251659|sec006c_IndecisionApp.jsx::EXE1: FORM_submit_INDC_add_option <1>^B]

//  SEC_005 --- 43. Removing Individual Options 16:22

        //[ state s1;^B]
        this.setState ( () =>
        (
            { error: L_error }
          //[ state.error a1;]
        )             );

        if ( ! L_error )
            P_event.target.elements.NPT_selected_option.value = '';
                                //[ NPT_selected_option clr-1;^B]
//        ReactDOM.render (GCfn_indecision_template (), appRoot);
    }
  };
//=========================================================
//=========================================================

       //  [S07251660|a01_Directory_01.txt::DRC1: Cls_AddOption render <1>^B]

       //  [S07251659|sec006c_IndecisionApp.jsx::TPL1: Cls_AddOption render <1>^B]

       //[ DEF1: Cls_AddOption render <1>^B]
  render ()
  {
    return (
      <div>
      {/* //[ state a2;^B] */}
      {
        this.state.error && <p className="add-option-error">{this.state.error}</p>
         //[ state.error a1;^B]
      }
      <form className="add-option" onSubmit={this.FORM_submit_add_option}>
                                    {/* //[ ASN1: FORM_submit_add_option <1>^B]  */}
        <input className="add-option__input" type="text" name="NPT_selected_option" />
                                                      {/*  //[ NPT_selected_option s1;^B]  */}
        <button className="std-button">Add Option</button>
      </form>
      </div>
           );
  }
//=========================================================
//=========================================================

}
//#########################################################

