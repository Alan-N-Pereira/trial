import React from 'react';
import Draggable from 'react-draggable';
import '../services/ipc-service-emulator';
import useChromeVoiceRecognition from '../../../services/chrome/use-voice-recognition';
import useAzureVoiceRecognition from '../../../services/azure/use-voice-recognition';
import { GlobalContext } from '../services/global-context';
import { factory as AppFactory } from '../../app';
import './style.scss';

const stt = localStorage.getItem('STT') || 'azure';

const App = AppFactory(stt === 'azure' ? useAzureVoiceRecognition : useChromeVoiceRecognition);

export default React.memo(function Editor() {
    const { language, isMobile } = React.useContext(GlobalContext);

    if (isMobile) {
        return (
            <AppMobile language={language} />
        );
    }

    return (
        <Draggable
            axis="both"
            handle=".handle"
            cancel=".control"
            defaultPosition={{ x: -250, y: -50 }}
        >
            <div>
                <Speech2Code mode="modalx" language={language} />
            </div>
        </Draggable>
    );
});

const AppMobile = (props) => {
    const [mode, setMode] = React.useState(
        window.location.pathname.includes('webapp') && window.location.hash !== '' ? 'modalx' : 'widget'
    );

    const wrapper = document.querySelector('.speech2code-wrapper');

    if (wrapper && mode === 'modalx') {
        wrapper.setAttribute('style', `--window-size-height: ${window.visualViewport.height - 25}px`);
    }

    return (
        <React.Fragment>
            <div className={`overlay ${mode}`}></div>
            <Speech2Code
                mode={mode}
                openModal={() => setMode('modalx')}
                closeModal={() => setMode('widget')}
                language={props.language}
            />
        </React.Fragment>
    );
};

const Speech2Code = (props) => {
    return (
        <div className={`speech2code-wrapper ${props.mode}`}>
            <div className="window">
                <div className="handle top-bar">
                    <div className="window-title">Speech2Code</div>
                    <div className="controls">
                        <div className={`control ${!props.closeModal ? 'disabled' : ''}`}>
                            <i
                                className="fa fa-window-close"
                                onClick={() => {
                                    if (props.closeModal) {
                                        document.querySelector('#root').style = 'position: unset';
                                        window.location.hash = '';
                                        props.closeModal();
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="window-content">
                    <App
                        initialLang={props.language}
                        mode={props.mode}
                        onOpen={() => {
                            if (!props.openModal) return null;

                            document.querySelector('#root').style = 'position: fixed';
                            props.openModal();
                        }}
                        onToggleRecording={(recording) => {
                            if (recording && props.closeModal) {
                                document.querySelector('#root').style = 'position: unset';
                                props.closeModal();
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};