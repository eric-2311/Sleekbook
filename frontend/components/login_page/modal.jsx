import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import SignUpForm from './sign_up_form';

export default function Modal() {
    const state = useSelector(state => {
        return {
            modal: state.ui.modal
        }
    });

    const dispatch = useDispatch();

    if (!state.modal) {
        return null;
    }

    function handleModal(e) {
        e.preventDefault();
        dispatch(closeModal())
    }

    let component;

    switch (state.modal) {
        case "signup":
            component = <SignUpForm />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={handleModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}