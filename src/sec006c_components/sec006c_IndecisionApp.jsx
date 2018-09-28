
//  sec006c_IndecisionApp.jsx

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_006_Webpack\react-course-proj-01\Indecision-app-01\src\sec006c_components\sec006c_IndecisionApp.jsx


//  SEC_006 --- 55. One Component per File 18:12


//  Cls_IndecisionApp
       //  [ CLS1: Cls_IndecisionApp <1>]

//    BTN_click_INDC_handle_pick ()

//  SFC_Header
//  SFC_Action
//  SFC_Options
//  SFC_Option
//  Cls_AddOption


import React from 'react';

import Cls_AddOption from './sec006c_add_option.jsx';
//  import SFC_Option from './sec006c_components/sec006c_SFC_option.jsx';
import SFC_Header from './sec006c_SFC_header.jsx';
import SFC_Action from './sec006c_SFC_action.jsx';
import SFC_Options from './sec006c_SFC_options.jsx';


//  SEC_007 --- 61. Setting up React-Modal 18:45

import SFC_Option_Modal from './sec007a_SFC_option_modal.jsx';

//#########################################################
//#########################################################


       //  [S07251660|a01_Directory_01.txt::DRC1: Cls_IndecisionApp <1>]

       //[ CLS1: Cls_IndecisionApp <1>^B]
class Cls_IndecisionApp extends React.Component
{
       //  [ DEF1: BTN_click_INDC_delete_an_option <1>]
       //  [ DEF1: BTN_click_INDC_delete_options <1>]
       //  [ DEF1: FORM_submit_INDC_add_option <1>]
       //  [ DEF1: BTN_click_INDC_handle_pick <1>]
       //  [ DEF1: BTN_click_INDC_clear_selected_option <1>]

       //  [ DEF1: componentDidMount <1>]
       //  [ DEF1: componentDidUpdate <1>]
       //  [ DEF1: componentWillUnmount <1>]

       //  [ DEF1: INDC render <1>]

       //  [ Cls_IndecisionApp.defaultProps def1;]


    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////

//  SEC_006 --- 58. ES6 class properties 17:33

    //[ state s1;]
    //[ state s3;]
    //[ state s5;]
    //[ state s2;]
    //[ state s4;]
    //[ state s6;]
    //[ state a7a;]
    //[ state a7b;]
    //[ state xxx]

    state =
    {
      xxx2options: [ 'Thing 1', 'Thing 2', 'Thing 3'  ],

     //[S07251660|a01_Directory_01.txt::all_options drc1;^B]
      all_options: [   ],
     //[ all_options delete-option-01;]
     //[ all_options delete-all-options-01;]
     //[ all_options ifc-1a;]
     //[ all_options add-1b;]
     //[ all_options a-2;]  <: select pick
     //[ all_options get-local-storage-1;]
     //[ all_options reset-local-storage-01;]
     //[ all_options SFC_Action pp1a;]
     //[ all_options SFC_Options pp1b;]
     //[ all_options default-01;]
     //[ all_options xxx]
//      all_options: P_props.all_options

//  SEC_007 --- 61. Setting up React-Modal 18:45
      //[S07251660|a01_Directory_01.txt::selectedOption drc1;^B]
      selectedOption: undefined
                //[ selectedOption s1;]
                //[ selectedOption clr-2;]
                //[ selectedOption pp3;]
                //[ selectedOption xxx]
    }
//=========================================================
//=========================================================


//=========================================================
//=========================================================

//  SEC_006 --- 58. ES6 class properties 17:33
//  constructor no longer needed

/**********************************************************************

//  SEC_004 --- 36. Indecision State: Part I 17:06
//  SEC_005 --- 41. Default Prop Values 9:49
  constructor (P_props)
  {
    super(P_props);

//  SEC_005 --- 43. Removing Individual Options 16:22
    this.BTN_click_INDC_delete_an_option
      = this.BTN_click_INDC_delete_an_option.bind(this);

//  SEC_004 --- 36. Indecision State: Part I 17:06
    this.BTN_click_INDC_delete_options
      = this.BTN_click_INDC_delete_options.bind (this);
    this.BTN_click_INDC_handle_pick
      = this.BTN_click_INDC_handle_pick.bind (this);

//  SEC_004 --- 37. Indecision State: Part II 14:33
    this.FORM_submit_INDC_add_option
      = this.FORM_submit_INDC_add_option.bind (this);


//  SEC_004 --- 36. Indecision State: Part I 17:06
    this.state =
    {
      xxx2options: [ 'Thing 1', 'Thing 2', 'Thing 3'  ],
      xxxoptions: [   ],

//  SEC_005 --- 41. Default Prop Values 9:49
      options: P_props.options
    }
  }

 **********************************************************************/

//=========================================================
//=========================================================

//  SEC_005 --- 43. Removing Individual Options 16:22

//  SEC_006 --- 58. ES6 class properties 17:33
//  BTN_click_INDC_delete_an_option (P_rmv_option)

   //  [S07251660|a01_Directory_01.txt::DRC1: BTN_click_INDC_delete_an_option <1>]

   //[ ASN1: BTN_click_INDC_delete_an_option <1>]

   //  [S07251659|sec006c_SFC_options.jsx::ASN2: BTN_click_INDC_delete_an_option <1>]

   //  [S07251659|sec006c_SFC_option.jsx::EXE1: BTN_click_INDC_delete_an_option <1>]

   //[ DEF1: BTN_click_INDC_delete_an_option <1>^B]
  BTN_click_INDC_delete_an_option = (P_rmv_option) =>
  {
    console.log ("delete this ", P_rmv_option);

//  SEC_005 --- 43. Removing Individual Options 16:22

    //[ state s1;^B]
    this.setState ( (P_prev_state) =>
    (
       {
         all_options:
     //[ all_options delete-option-01;^B]
           P_prev_state.all_options.filter ( (P_option) =>
             P_rmv_option !== P_option
                                       )
       }
    )             );
  };
//=========================================================
//=========================================================

//  SEC_005 --- 43. Removing Individual Options 16:22

//  SEC_006 --- 58. ES6 class properties 17:33

   //  [S07251660|a01_Directory_01.txt::DRC1: BTN_click_INDC_delete_options <1>]

   //[ ASN1: BTN_click_INDC_delete_options <1>]

   //  [S07251659|sec006c_SFC_options.jsx::EXE1: BTN_click_INDC_delete_options <1>]

//  BTN_click_INDC_delete_options ()
       //[ DEF1: BTN_click_INDC_delete_options <1>^B]
  BTN_click_INDC_delete_options = () =>
  {

//  SEC_005 --- 43. Removing Individual Options 16:22

    //[ state s2;^B]
    this.setState ( () =>
    (
       { all_options: [] }
     //[ all_options delete-all-options-01;^B]
    )             );
  };
//=========================================================
//=========================================================

//  SEC_004 --- 37. Indecision State: Part II 14:33

//  SEC_006 --- 58. ES6 class properties 17:33

       //  [S07251660|a01_Directory_01.txt::DRC1: FORM_submit_INDC_add_option <1>^B]

       //[ ASN1: FORM_submit_INDC_add_option <1>]

  //  Cls_AddOption.FORM_submit_add_option 
  //  [S07251659|sec006c_add_option.jsx::EXE1: FORM_submit_INDC_add_option <1>]

//  FORM_submit_INDC_add_option (P_new_option)

       //[ DEF1: FORM_submit_INDC_add_option <1>^B]
  FORM_submit_INDC_add_option = (P_new_option) =>
  {
    if ( ! P_new_option )
      return "enter valid value to add item";
    else
    if ( this.state.all_options.indexOf(P_new_option) > -1 )
                //[ all_options ifc-1a;^B]
      return "This item already exists";

//  SEC_005 --- 43. Removing Individual Options 16:22

    //[ state s3;^B]
    this.setState ( (P_prev_state) =>
    (   {
      //  mdn - concat
          all_options: P_prev_state.all_options.concat ( P_new_option )
                                //[ all_options add-1b;^B]
        }
    )             )
  };
//=========================================================
//=========================================================

//  SEC_004 --- 36. Indecision State: Part I 17:06

//  SEC_006 --- 58. ES6 class properties 17:33
//  BTN_click_INDC_handle_pick ()

       //  [S07251660|a01_Directory_01.txt::DRC1: BTN_click_INDC_handle_pick <1>^B]

       //[ ASN1: BTN_click_INDC_handle_pick <1>]

       //  GC_SFC_Action
       //  [S07251659|sec006c_SFC_action.jsx::EXE1: BTN_click_INDC_handle_pick <1>]

       //[ DEF1: BTN_click_INDC_handle_pick <1>^B]
  BTN_click_INDC_handle_pick = () =>
  {
    const L_random_num
            = Math.floor
                (Math.random() * this.state.all_options.length);

    const L_option = this.state.all_options[L_random_num];
                            //[ all_options a-2;^B]

    console.log (L_random_num);
    //  alert (L_option);

    //[ state s4;^B]
    this.setState ( () =>
    {
      return {
        selectedOption: L_option
    //[ selectedOption s1;^B]
             };
    }             );
  };
//=========================================================
//=========================================================

//  SEC_007 --- 61. Setting up React-Modal 18:45

       //[ ASN1: BTN_click_INDC_clear_selected_option <1>]

       //  [S07251659|sec007a_SFC_option_modal.jsx::EXE1a: BTN_click_INDC_clear_selected_option <1>]

       //[ DEF1: BTN_click_INDC_clear_selected_option <1>^B]
  BTN_click_INDC_clear_selected_option = () =>
  {
    //[ state s5;^B]
    this.setState ( () =>
    {
      return {
        selectedOption: undefined
    //[ selectedOption clr-2;^B]
             };
    }             );
  };
//=========================================================

//=========================================================

//=========================================================

//  SEC_005 --- 44. Lifecycle Methods 10:07
//  SEC_005 --- 45. Saving and Loading Options Data 14:36

       //[ DEF1: componentDidMount <1>^B]
  componentDidMount ()
  {
    try
    {

      //[ all_options get-local-storage-1;^B]

      const L_json = localStorage.getItem('all_options');
      const L_all_options = JSON.parse (L_json);

      if ( L_all_options )
          this.setState ( () => ({ L_all_options }) );

      //console.log ("componentDidMount");
      console.log ("  *** componentDidMount in sec006c_IndecisionApp.jsx ***");
      console.log ("  *** fetching data", L_all_options);
    }
    catch (L_xcpt)
    {
      // do nothing
    }
  }
//=========================================================

//  SEC_005 --- 44. Lifecycle Methods 10:07
//  SEC_005 --- 45. Saving and Loading Options Data 14:36

       //[ DEF1: componentDidUpdate <1>^B]
  componentDidUpdate (P_prev_props, P_prev_state)
  {
    //[ all_options reset-local-storage-01;^B]

    //console.log ("componentDidUpdate");
    if (P_prev_state.all_options.length !== this.state.all_options.length)
    {
      const L_json = JSON.stringify (this.state.all_options);
      localStorage.setItem('all_options', L_json);
      console.log ("  *** componentDidUpdate in sec006c_IndecisionApp.jsx ***");
      console.log ("  *** saving data", L_json);
    }
  }
//=========================================================

//  SEC_005 --- 44. Lifecycle Methods 10:07

       //[ DEF1: componentWillUnmount <1>^B]
  componentWillUnmount ()
  {
    console.log ("componentWillUnmount");
  }
//=========================================================
//=========================================================

//  SEC_004 --- 36. Indecision State: Part I 17:06

//  SEC_005 --- 43. Removing Individual Options 16:22

  xxxBTN_click_INDC_delete_options ()
  {

//  SEC_005 --- 43. Removing Individual Options 16:22

    //[ state s6;^B]
    this.setState ( () =>
    (
        { all_options: [] }
    )             );
  }
//=========================================================
//=========================================================

   //  [S07251660|a01_Directory_01.txt::DRC1: Cls_IndecisionApp render <1>^B]

       //[ DEF1: INDC render <1>^B]
  render ()
  {
    const L_title = "Indecision";
    const L_subtitle = "Put your life in the hands of a computer";

//  SEC_004 --- 36. Indecision State: Part I 17:06
    //const L_options = [ 'Thing 1', 'Thing 2', 'Thing 3'  ];


//  SEC_004 --- 28. Component Props 13:34
//  SEC_004 --- 36. Indecision State: Part I 17:06
    return (
  <div>
    {/*  [S07251659|sec006c_SFC_header.jsx::TPL1: GC_SFC_Header <1>^B]  */}
    {/*      */}
    <SFC_Header   title={L_title} subtitle={L_subtitle} />
  <div className="container">
    {/* [S07251659|sec006c_SFC_action.jsx::TPL1: GC_SFC_Action <1>^B] */}
    <SFC_Action   hasOptions={this.state.all_options.length > 0}
                                     //[ all_options SFC_Action pp1a;^B]
                  BTN_click_INDC_handle_pick={this.BTN_click_INDC_handle_pick} />
                                     {/* //[ ASN1: BTN_click_INDC_handle_pick <1>^B] */}

    {/*
//  SEC_005 --- 43. Removing Individual Options 16:22
//  SEC_008 --- 69. Styling the Options List 14:13
      */}
  <div className="std-widget">
    {/*  [S07251659|sec006c_SFC_options.jsx::TPL1: GC_SFC_Options <1>^B]  */}
    {/*    //[ state a7a;^B]       */}
    {/*    //[ ASN1: BTN_click_INDC_delete_options <1>^B]  */}
    {/*    //[ ASN1: BTN_click_INDC_delete_an_option <1>^B]  */}
    <SFC_Options
      options={this.state.all_options}
                      //[ all_options SFC_Options pp1b;^B]
      BTN_click_INDC_delete_options={this.BTN_click_INDC_delete_options}
      BTN_click_INDC_delete_an_option={this.BTN_click_INDC_delete_an_option}
       />
    {/*   //  [S07251659|sec006c_add_option.jsx::TPL1: Cls_AddOption <1>^B]  */}
    {/*       [S07251659|sec006c_add_option.jsx::TPL1: Cls_AddOption render <1>^B]  */}
    <Cls_AddOption FORM_submit_INDC_add_option={this.FORM_submit_INDC_add_option} />
    {/*  //[ ASN1: FORM_submit_INDC_add_option <1>^B]  */}
    <br/>
{/*  SEC_007 --- 61. Setting up React-Modal 18:45*/}
{/*    [S07251659|sec007a_SFC_option_modal.jsx::TPL1: SFC_Option_Modal^B]  */}
    {/*    //[ state a7b;^B]
           //[ selectedOption pp3;^B]
           //[ ASN1: BTN_click_INDC_clear_selected_option <1>^B]  */}
    <SFC_Option_Modal
        selectedOption={this.state.selectedOption}
        BTN_click_INDC_clear_selected_option={this.BTN_click_INDC_clear_selected_option}
    />
    </div>
    <br/>
    <br/>
  </div>
  </div>
           );
  }
//=========================================================
//=========================================================

}
//#########################################################

//  SEC_005 --- 41. Default Prop Values 9:49

            //[ Cls_IndecisionApp.defaultProps def1;^B]
Cls_IndecisionApp.defaultProps =
{
  all_options: []
     //[ all_options default-01;^B]
};
//#########################################################
//#########################################################


//  import Cls_IndecisionApp from './sec006c_components/sec006c_IndecisionApp.jsx';

export default Cls_IndecisionApp;

//#########################################################
//#########################################################

