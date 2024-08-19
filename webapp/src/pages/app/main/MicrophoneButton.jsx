import React, { useEffect } from 'react';

export function MicrophoneButton(props) {
    useEffect(() => {
        const canvas = document.getElementById('micCanvas');
        const ctx = canvas.getContext('2d');
        let audioContext = null;
        let streamSource = null;
        let processor = null;

        if (ctx == null || props.mode === 'widget') return;

        drawCircle(ctx, canvas);

        function draw(data) {
            if (document.hidden) return;

            window.requestAnimationFrame(() => {
                if (ctx == null) return;

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                drawCircle(ctx, canvas);
                drawWaveform(canvas.width, canvas.height, ctx, data.inputBuffer);
            });
        }

        navigator.mediaDevices.getUserMedia({
            audio: {
                echoCancellation: !false,
                noiseSuppression: false,
                autoGainControl: false
            },
            video: false
        }).then(rawStream => {
            audioContext = new AudioContext();
            streamSource = audioContext.createMediaStreamSource(rawStream);
            processor = audioContext.createScriptProcessor(2 ** 12, 1, 1);

            processor.connect(audioContext.destination);
            streamSource.connect(processor);

            processor.addEventListener('audioprocess', draw);

            return rawStream;
        }).catch(err => {
            props.setError({
                __error: err,
                mainTitle: 'Could not access your microphone',
                title: 'Microphone access is not required but recommended',
                subTitle: 'Speech2Code? More like Text2Code!',
                body: `Without microphone access you will have to <b>write</b> your voice commands on the debug option below.<br/><br/>
                This app cannot use the microphone because of <i>${err}</i>`
            });
            console.error(err);
        });

        return () => {
            if (!!audioContext) {
                processor?.removeEventListener('audioprocess', draw);
                streamSource?.disconnect(processor);
                processor?.disconnect(audioContext.destination);
                audioContext.close();
            }
        };
    }, []);

    window.recording = props.recording;

    const disabled = !props.active || props.changingLanguage;
    const size = props.mode === 'widget' ? 50 : 122;

    const onClickMic = (e) => {
        if (disabled) return null;
        if (props.mode === 'widget') return props.onOpen?.();

        return props.toggleRecording();
    };

    return (
        <div
            className={`record ${props.recording ? 'on' : 'off'} ${disabled ? 'error' : ''}`}
            style={{ '--size': size + 'px' }}
        >
            <div
                className={`btn ${disabled ? 'disabled' : ''}`}
                onClick={onClickMic}
                title={
                    disabled
                        ? `Something is wrong, click on the red panel above for more details.`
                        : `Click on it to ${props.recording ? 'stop' : 'start'} recording!`
                }
            >
                {!props.changingLanguage && <i className="fa fa-microphone" />}
                {props.changingLanguage && <i className="fa fa-circle-o-notch fa-spin fa-3x"></i>}
                <canvas id="micCanvas" width={size} height={size}></canvas>
            </div>
            <span className="info">
                {i18n(props.language)(props.recording ? 'rec' : 'not-rec')()}
            </span>
        </div>
    );
}

function drawCircle(ctx, canvas) {
    const rec = window.recording;

    ctx.fillStyle = rec ? '#ef5350' : '#3da2de';
    ctx.strokeStyle = rec ? '#ef5350' : '#3da2de';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, (canvas.width / 2) - 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}

function drawWaveform(width, height, context, buffer) {
    width = width / 3;
    const data = buffer.getChannelData(0);
    const step = Math.ceil(data.length / width);
    const amp = height * 0.5;
    for (let i = 0; i < width; i++) {
        let min = 1.0;
        let max = -1.0;
        for (let j = 0; j < step; j++) {
            const datum = data[(i * step) + j];
            if (datum < min) min = datum;
            if (datum > max) max = datum;
        }
        context.fillRect((i * 3), (1 + min) * amp, 2, Math.max(1, (max - min) * amp));
    }
}

const texts = {
    'en-US': {
        'not-rec': () => <>Click on the mic to <b>start</b> recording.</>,
        'rec': () => <>Click on the mic to <b>stop</b> recording.</>
    },
    'pt-BR': {
        'not-rec': () => <>Clique no microfone para <b>começar</b> a gravação.</>,
        'rec': () => <>Clique no microfone para <b>parar</b> a gravação.</>
    }
};

const i18n = (lang) => (textId) => texts[lang][textId];