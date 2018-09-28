

//  sec007a_option_modal.jsx

//  K:\aaa_TransZ_DT201607\Ralph\Udemy\C023_Complete_React_Web_Dev\Sections\
//  SEC_007_3PCmpn\proj_01\Indecision-app\src\sec006c_components\sec007a_option_modal.jsx


//  SEC_007 --- 61. Setting up React-Modal 18:45

import React from 'react';
import Modal from 'react-modal';

//=========================================================
//=========================================================

//  [S07251660|a01_Directory_01.txt::DRC1: GC_option_modal <1>]

//  [S07251659|sec006c_IndecisionApp.jsx::TPL1: SFC_Option_Modal^B]


const GC_option_modal = (P_props) =>
(

  //[S07251659|sec006c_IndecisionApp.jsx::EXE1a: BTN_click_INDC_clear_selected_option <1>^B]

        <Modal
            ariaHideApp={false}
            isOpen={ !! P_props.selectedOption }
            onRequestClose={P_props.BTN_click_INDC_clear_selected_option}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="modal"
        >
          <h3 className="model__title">Selected Option</h3>
          { P_props.selectedOption && <p className="model__body">{P_props.selectedOption}</p> }
          <button
            className="std-button"
            onClick={P_props.BTN_click_INDC_clear_selected_option}
          >OKAY
          </button>
        </Modal>
);
//=========================================================
//=========================================================

const OLD2_GC_option_modal = () =>
(
        <div>
          some text
        </div>
);
//=========================================================
//=========================================================

const OLD_GC_option_modal = () =>
{
    return (
        <div>
          some text
        </div>
    );
};
//=========================================================
//=========================================================

export default GC_option_modal;

//=========================================================
//=========================================================
