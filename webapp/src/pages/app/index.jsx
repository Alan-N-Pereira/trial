import React, { useEffect, useState } from 'react';
import Header from './header';
import Main from './main';
import Modules from './spoken';
import About from './about';
import Help from './help';
import { ModalSection } from './Modal';
import GloablContext from '../../services/global-context';
import { VoiceRecognitionHook } from '../../services/use-voice-recognition';
import './index.scss';

export function factory(useVoiceRecognition) {
    const main = Main(useVoiceRecognition);

    return function App(props) {
        return (
            <GloablContext
                lang={props.initialLang}
                mode={props.mode}
                onOpen={props.onOpen}
                onClose={props.onOpen}
                onToggleRecording={props.onToggleRecording}
            >
                <div>
                    <Header />
                    <Router
                        pages={[
                            { hash: '', component: main },
                            { hash: 'spoken', component: Modules },
                            { hash: 'help', component: Help },
                            { hash: 'about', component: About }
                        ]}
                    />
                </div>
                <ModalSection />
            </GloablContext>
        );
    };
}

export default factory();

function Router(props) {
    const [hash, setHash] = useState(window.location.hash);

    useEffect(() => {
        function hashchange() {
            setHash(window.location.hash);
        }

        window.addEventListener('hashchange', hashchange);

        return () => {
            window.removeEventListener('hashchange', hashchange);
        };

    }, []);

    const page = props.pages.find((page) => new RegExp('^(#|#/|)' + page.hash + '(/|)$').test(hash));

    return page ? <page.component /> : null;
}