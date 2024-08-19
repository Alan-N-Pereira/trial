import React, { useState, useEffect, useContext } from 'react';
import CodeMirror from 'codemirror';
import EditorService from '../services/editor';
import { GlobalContext } from '../services/global-context';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/idea.css';
import 'codemirror/addon/selection/active-line.js';
import 'codemirror/mode/javascript/javascript.js';
import './style.scss';

let myCodeMirror = null;

export default React.memo(function Editor() {
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);

    const { problem } = useContext(GlobalContext);

    useEffect(() => {
        myCodeMirror = CodeMirror(document.querySelector('#code-editor'), {
            lineNumbers: true,
            mode: 'javascript',
            styleActiveLine: true,
            matchBrackets: true,
            theme: 'idea',
            indentUnit: 4,
            value: '// your code will be written here\n' + problem.code
        });

        EditorService.setEditor(myCodeMirror);

        EditorService.onRunCode({
            before: () => setLoading(true),
            success: (result) => setResult(result),
            error: (ex) => setResult(ex.toString()),
            after: () => setLoading(false)
        });

    }, []);

    useEffect(() => {
        myCodeMirror?.setValue('// your code will be written here\n' + problem.code);
        setResult('');
    }, [problem.index, problem.code]);

    return (
        <div>
            <div className="code-editor-wrapper">
                <div className="filename">
                    MyLittleDarkAge.js
                    <span
                        onClick={() => EditorService.runCode()}
                        title="Click here to run this file"
                        className={`${loading ? 'loading' : ''}`}
                    >
                        {loading && <i className="fa fa-circle-o-notch fa-spin fa-3x"></i>}
                        {!loading && <i className="fa fa-caret-right"/>}
                    </span>
                </div>
                <div id="code-editor"></div>
            </div>
            <div className={`output ${loading ? 'loading' : ''}`}>
                <div>
                    <i className="fa fa-angle-right"></i>
                    {loading && <span className="fa-3x"><i className="fa fa-circle-o-notch fa-spin"></i></span>}
                </div>
                {!loading && <pre>{result === '' ? 'empty output' : result}</pre>}
            </div>
        </div>
    );
});