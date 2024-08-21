"use strict";(self.webpackChunkspeech2code_webapp=self.webpackChunkspeech2code_webapp||[]).push([[626,312],{375:(e,a,r)=>{r.d(a,{A:()=>i});r(5043);var o=r(6085),t=r(4115),n=r(579);function i(e){const{root:a,lang:r,route:i}=(0,t.Z)(),l=e=>`/${a}${a?"/":""}${e}`,c=e=>i===e?"selected":"",d=localStorage.getItem("STT")||"azure",h="index"===i?"":i+"/",u=(e,a)=>(a.preventDefault(),localStorage.setItem("STT",e),window.location.reload());return(0,n.jsxs)("nav",{id:"top-nav",children:[(0,n.jsx)("figure",{children:(0,n.jsx)("img",{src:"/logo-purple.png",alt:"logo",height:"40",title:"Brand logo"})}),(0,n.jsx)("a",{href:l(""),className:c("index"),children:s[r].Home}),(0,n.jsx)("a",{href:l("webapp/"),className:c("webapp"),children:"Demo"}),(0,n.jsx)("a",{rel:"noreferrer",href:"https://pedrooaugusto.github.io/Programming With Voice - Assistive Technology Tool For Programming In JavaScript Using Voice - Pedro Silva.pdf",target:"_blank",children:s[r].Article}),(0,n.jsx)("a",{href:l("about/"),className:c("about"),children:s[r].About}),(0,n.jsxs)("a",{href:"https://github.com/pedrooaugusto/speech-to-code",target:"_blank",rel:"noreferrer",children:[(0,n.jsx)("i",{className:"fa fa-github",style:{marginRight:"5px",fontSize:"20px"}})," GitHub"]}),(0,n.jsxs)("div",{className:"language",children:[(0,n.jsx)("a",{href:"/en/"+h,className:"en-US"===r?"selected":"",children:"en-US"}),"\xa0/\xa0",(0,n.jsx)("a",{href:"/pt/"+h,className:"pt-BR"===r?"selected":"",children:"pt-BR"}),(0,n.jsx)("span",{className:"help","data-tip":"This website language","data-for":"header",children:(0,n.jsx)("i",{className:"fa fa-question-circle"})})]}),(0,n.jsxs)("div",{className:"config",children:[(0,n.jsx)("a",{href:"#",className:"azure"===d?"selected":"",onClick:e=>u("azure",e),children:"Azure"}),"\xa0/\xa0",(0,n.jsx)("a",{href:"#",className:"chrome"===d?"selected":"",onClick:e=>u("chrome",e),children:"Chrome"}),(0,n.jsx)("span",{className:"help","data-tip":s[r].help,"data-for":"header",children:(0,n.jsx)("i",{className:"fa fa-question-circle"})})]}),(0,n.jsx)(o.A,{multiline:!0,effect:"solid",className:"custom-tooltip tooltip-header",id:"header"})]})}const s={"en-US":{help:"Which Speech to Text provider should be used ?<br/>\n                Azure is the default option, but since it is a paid service it may not be available all the time.<br/>\n                Chrome is the native Speech to Text provider of your browser, it's a free service and was\n                tested on Google Chrome and MS Edge (it may work on any browser that supports the SpeechRecognition API).",Home:"Home",About:"About",Article:"Article"},"pt-BR":{help:"Qual o provedor de Speech to Text deve ser usado ?<br/>\n        Azure \xe9 a op\xe7\xe3o padr\xe3o, por se tratar de um servi\xe7o pago, pode n\xe3o estar dispon\xedvel a todo momento.<br/>\n        Chrome \xe9 o servi\xe7o nativo de convers\xe3o de fala em texto do seu navegador, \xe9 um servi\xe7o gr\xe1tis e funciona\n            no Google Chrome e no MS Edge (pode funcionar em qualquer browser que suporte a SpeechRecognition API).",Home:"In\xedcio",About:"Sobre",Article:"Artigo"}}},9768:(e,a,r)=>{r.r(a),r.d(a,{default:()=>B});var o=r(5043),t=r(375),n=r(6246),i=r.n(n),s=r(9115);const l=[{id:"welcome",title:{"pt-BR":"Ol\xe1 Mundo","en-US":"Hello World"},placeholder:{"pt-BR":'Speech2Code \xe9 uma aplica\xe7\xe3o desktop que lhe permite programar usando apenas comandos de voz, \n        ela funciona manipulando IDE\'s e editores do c\xf3digo com base na an\xe1lise de comandos de voz recebidos como entrada.<br/>\n        Nesta p\xe1gina, um demo da aplica\xe7\xe3o mencionada <u>portada para a web</u>, voc\xea pode aprender como us\xe1-la resolvendo\n        programas de programa\xe7\xe3o simples na linguagem JavaScript.<br/><br/>\n        O primeiro problema \xe9 o cl\xe1ssico "Ol\xe1 mundo" onde voc\xea precisa escrever a string "Ol\xe1 mundo"\n        na s\xe1ida padr\xe3o do sistema.',"en-US":'Speech2Code is a desktop application that enables you to code using just voice commands, \n        it achieves that by connecting to your favorite IDE and issuing commands to it. This page is a demo\n        of said application <u>ported to the web</u>, here you can learn how to use this tool by solving simple \n        programming problems using just voice commands. <b>You may change the input language to pt-BR.</b> <br/><br/>\n        The first problem is the classic "hello world" where you are meant to write "hello world" to\n        the standard output.'},statement:{"pt-BR":'Escreva a string "ol\xe1 mundo" na s\xe1ida padr\xe3o do sistema em JavaScript.',"en-US":'Write the string "hello world" to the standard output in JavaScript.'},solution:{"pt-BR":["Clique no microfone para come\xe7ar a grava\xe7\xe3o.","Clique na primeira linha do editor de c\xf3digo.",'Diga a frase: "v\xe1 para a linha 4."','Diga a frase: "execute a fun\xe7\xe3o mostrar com um argumento".','Diga a frase: "selecione a palavra gap".','Diga a frase: "texto ol\xe1 mundo texto".','Diga a frase: "execute o arquivo atual" ou clique no \xedcone verde acima do editor de c\xf3digo\n                para executar o c\xf3digo.',"<i>Valide a sa\xedda do programa no se\xe7\xe3o abaixo do editor de c\xf3digo.</i>","Fim."],"en-US":["Click on the microphone to start recording.","Click on the first line of the code editor.",'Say the phrase: "go to line number 4."','Say the phrase: "execute function print with one argument".','Say the phrase: "text hello world text".','Say the phrase: "please the run current file" or click on the green icon above the code editor.',"<i>Check the program output in the section below the code editor.</i>","Done."]},code:{"pt-BR":"const mostrar = console.log\n\n","en-US":"const print = console.log\n\n"}},{id:"avg",title:{"pt-BR":"M\xe9dia","en-US":"Mean"},placeholder:{"pt-BR":'Computar a m\xe9dia entre dois n\xfameros.<br/><br/>\n            <i class="fa fa-info-circle"></i> \xc9 poss\xedvel dizer "remover linha" para remover a linha atual.<br/>\n            <i class="fa fa-info-circle"></i> Diga "desfa\xe7a isso" ou "refa\xe7a isso" para desfazer e refazer o \xfaltimo comando.',"en-US":'Calculate the mean between two numbers.<br/><br/>\n            <i class="fa fa-info-circle"></i> It\'s possible to say "remove line" to remove the current line.<br/>\n            <i class="fa fa-info-circle"></i> Say "undo that" or "redo that" to undo or redo the last command.'},statement:{"pt-BR":"Crie uma fun\xe7\xe3o que retorne a m\xe9dia de entre dois n\xfameros.","en-US":"Write a function to compute the average of two numbers."},solution:{"pt-BR":["Clique no microfone para come\xe7ar a grava\xe7\xe3o.","Clique na primeira linha do editor de c\xf3digo.",'Diga a frase: "v\xe1 para a linha 2."','Diga a frase: "nova fun\xe7\xe3o m\xe9dia com 2 argumentos retornando gap".','Diga a frase: "vari\xe1vel b".','Diga a frase: "selecione a palavra gap".','Diga a frase: "vari\xe1vel c".','Diga a frase: "linha 3".','Diga a frase: "criar linha".','Diga a frase: "linha 3"','Diga a frase: "nova constante soma igual a gap".','Diga a frase: "express\xe3o vari\xe1vel b mais vari\xe1vel c".','Diga a frase: "linha 4".','Diga a frase: "selecione a palavra gap".','Diga a frase: "express\xe3o vari\xe1vel soma dividido por n\xfamero 2".','Diga a frase: "execute o arquivo atual".',"<i>Valide a sa\xedda do programa.</i>","Fim."],"en-US":["Click on the microphone to start recording.","Click on the first line of the code editor.",'Say the phrase: "go to line number 2."','Say the phrase: "new function mean with 2 arguments returning gap".','Say the phrase: "variable b".','Say the phrase: "select the word gap".','Say the phrase: "variable c".','Say the phrase: "line 3".','Say the phrase: "please create a line".','Say the phrase: "line 3".','Say the phrase: "new constant sum equals gap".','Say the phrase: "expression variable b plus variable c".','Say the phrase: "line 4".','Say the phrase: "select the word gap".','Say the phrase: "expression variable sum divided by number 2".','Say the phrase: "run current file" or click on the green icon above the code editor.',"<i>Check the program output in the section below the code editor.</i>","Done."]},code:{"pt-BR":"\n\nconsole.log(m\xe9dia(23, 7))","en-US":"\n\nconsole.log(mean(23, 7))"}},{id:"perfectSquare",title:{"pt-BR":"Quadrado Perfeito","en-US":"Perfect Square"},placeholder:{"pt-BR":'Teste se um n\xfamero \xe9 um quadrado perfeito.<br/><br/><i class="fa fa-info-circle"></i> \xc9 poss\xedvel dizer "escreva ..." para escrever qualquer coisa na linha atual.',"en-US":'Test if a number is a perfect square.<br/><br/><i class="fa fa-info-circle"></i> It\'s possible to say "write ..." to write anything in the current line.'},statement:{"pt-BR":"Crie uma fun\xe7\xe3o para checar se um n\xfamero \xe9 um quadrado perfeito. Escreva na tela\n            'quadrado perfeito' em caso positivo e 'quadrado imperfeito' em caso negativo.","en-US":"Write a function to check if a given number is a perfect square.\n            Write to the standard output <i>'perfect square'</i> if yes and <i>'imperfect square'</i> if no."},solution:{"pt-BR":["Clique no microfone para come\xe7ar a grava\xe7\xe3o.","Clique na primeira linha do editor de c\xf3digo.",'Diga a frase: "v\xe1 para a linha 2."','Diga a frase: "nova fun\xe7\xe3o quadrado com um argumento".','Diga a frase: "vari\xe1vel n\xfamero".','Diga a frase: "linha 3".','Diga a frase: "vari\xe1vel n\xfamero igual gap".','Diga a frase: "mude a linguagem para ingl\xeas".',"<i>A partir de agora os comandos de voz ser\xe3o ditos em ingl\xeas.</i>",'Say the phrase: "select the word gap".','Say the phrase: "execute function gap on namespace math with one argument".','Say the phrase: "write SQRT".<br/><i>Just say the letters, you can try multiple times</i>.','Say the phrase: "switch back language back to portuguese".',"<i>A partir de agora os comandos de voz ser\xe3o ditos em portugu\xeas.</i>",'Diga a frase: "selecione a palavra gap".','Diga a frase: "vari\xe1vel n\xfamero".','Diga a frase: "ponteiro final da linha".','Diga a frase: "linha nova".','Diga a frase: "estrutura condicional se sen\xe3o express\xe3o gap igual ao n\xfamero 0".','Diga a frase: "express\xe3o vari\xe1vel n\xfamero m\xf3dulo n\xfamero 1".','Diga a frase: "linha 5".','Diga a frase: "execute a fun\xe7\xe3o mostrar com o argumento texto quadrado perfeito texto".','Diga a frase: "linha 7".','Diga a frase: "execute a fun\xe7\xe3o mostrar com o argumento texto quadrado imperfeito texto".','Diga a frase: "execute o arquivo atual".',"<i>Valide a sa\xedda do programa.</i>","Fim."],"en-US":["Click on the microphone to start recording.","Click on the first line of the code editor.",'Say the phrase: "go to line number 2."','Say the phrase: "new function square with one argument".','Say the phrase: "variable number".','Say the phrase: "line 3".','Say the phrase: "variable number equals gap".','Say the phrase: "call function gap on namespace math with one argument".','Say the phrase: "write SQRT".<br/><i>Just say the letters, you can try multiple times</i>.','Say the phrase: "select the word gap".','Say the phrase: "variable number".','Say the phrase: "pointer end of line".','Say the phrase: "create a line".','Say the phrase: "conditional statement if else expression gap equals number 0".','Say the phrase: "expression variable number module number 1".','Say the phrase: "line 5".','Say the phrase: "call function print with the argument string perfect square string".','Say the phrase: "line 7".','Say the phrase: "execute function print with one argument".','Say the phrase: "text imperfect square text".','Say the phrase: "run current file" or click on the green icon above the code editor.',"<i>Check the program output in the section below the code editor.</i>","Done."]},code:{"pt-BR":"\n\nvar mostrar = console.log\nquadrado(4)\nquadrado(13)","en-US":"\n\nvar print = console.log\nsquare(4)\nsquare(13)"}},{id:"multipleSevenSix",title:{"pt-BR":"M\xfaltiplos de 6 ou 7","en-US":"Multiples of 6 or 7"},placeholder:{"pt-BR":'Use um <i>for loop</i> para listar m\xfaltiplos de 6 ou 7.<br/><br/>\n            <i class="fa fa-info-circle"></i> \xc9 poss\xedvel dizer "selecione da linha 3 at\xe9 a linha 6" para selecionar o intervalo\n            entre estas linhas ou ainda "selecione da letra A at\xe9 a letra T" para selecionar o\n            texto entre essas letras na linha atual.',"en-US":'Use a <i>for loop</i> to list every multiple of 6 or 7.<br/><br/>\n            <i class="fa fa-info-circle"></i> It\'s possible to say "select from line 3 to line 6" to select the interval between\n            those lines or even "select from letter A to the letter T" to select the interval between those letters in the current line.'},statement:{"pt-BR":"Escreva na tela todos os m\xfaltiplos dos n\xfameros 6 ou 7 no intervalo 0..256.","en-US":"Write a function to list every multiple of the number 6 or 7 in the inverval 0..256."},solution:{"pt-BR":["Clique no microfone para come\xe7ar a grava\xe7\xe3o.","Clique na segunda linha do editor de c\xf3digo.",'Diga a frase: "v\xe1 para a linha 4".','Diga a frase: "estrutura de repeti\xe7\xe3o do n\xfamero 0 at\xe9 o n\xfamero 256".','Diga a frase: "linha 5".','Diga a frase: "estrutura condicional express\xe3o gap ou gap".','Diga a frase: "express\xe3o gap m\xf3dulo n\xfamero 6 igual ao n\xfamero 0".','Diga a frase: "vari\xe1vel i".','Diga a frase: "selecione a palavra gap".','Diga a frase: "express\xe3o gap m\xf3dulo n\xfamero 7 igual ao n\xfamero 0".','Diga a frase: "vari\xe1vel i".','Diga a frase: "linha 6".','Diga a frase: "execute a fun\xe7\xe3o mostrar com o argumento vari\xe1vel i".','Diga a frase: "execute o arquivo atual".',"<i>Valide a sa\xedda do programa.</i>","Fim."],"en-US":["Click on the microphone to start recording.","Click on the first line of the code editor.",'Say the phrase: "go to line number 4."','Say the phrase: "repetition statement from number 0 to number 256".','Say the phrase: "line 5".','Say the phrase: "conditional statement expression gap or gap".','Say the phrase: "expression gap module number 6 equals number 0".','Say the phrase: "variable i".','Say the phrase: "select the word gap".','Say the phrase: "expression gap module number 7 equals number 0".','Say the phrase: "vari\xe1vel i".','Say the phrase: "line 6".','Say the phrase: "call function print with the argument variable i".','Say the phrase: "run current file" or click on the green icon above the code editor.',"<i>Check the program output in the section below the code editor.</i>","Done."]},code:{"pt-BR":"var mostrar = console.log\n\n","en-US":"var print = console.log\n\n"}},{id:"happyNumber",title:{"pt-BR":"N\xfamero Feliz","en-US":"Happy Number"},placeholder:{"pt-BR":'Teste se um n\xfamero qualquer <i>N</i> \xe9 um <a target="_blank" href="https://pt.wikipedia.org/wiki/N%C3%BAmero_feliz">N\xfamero Feliz</a>.<br/><br/>\n            <i class="fa fa-info-circle"></i> \xc9 poss\xedvel dizer "troque a linguagem para ingl\xeas" para mudar o idioma de entrada para ingl\xeas.',"en-US":'Test if a given number <i>N</i> is a <a target="_blank" href="https://en.wikipedia.org/wiki/Happy_number">Happy Number</a>.<br/><br/>\n            <i class="fa fa-info-circle"></i> It\'s possible to say "change language to portuguese" to change the input language to portuguese.'},statement:{"pt-BR":'Complete a fun\xe7\xe3o para determinar se um n\xfamero natural qualquer \xe9 um\n            <a target="_blank" href="https://pt.wikipedia.org/wiki/N%C3%BAmero_feliz">n\xfamero feliz</a>.',"en-US":'Complete the function to test if a given natural number is a \n            <a target="_blank" href="https://en.wikipedia.org/wiki/Happy_number">Happy Number</a>. \n            <a target="_blank" href="https://www.youtube.com/watch?v=ee2If8jSxUo&t=19s">(happy primes)</a>'},solution:{"pt-BR":["Clique no microfone para come\xe7ar a grava\xe7\xe3o.","Clique na segunda linha do editor de c\xf3digo.",'Diga a frase: "linha 5".','Diga a frase: "criar linha".','Diga a frase: "linha 5".','Diga a frase: "estrutura condicional express\xe3o gap igual a n\xfamero 1".','Diga a frase: "vari\xe1vel valor".','Diga a frase: "linha 6".','Diga a frase: "retorne verdadeiro".','Diga a frase: "linha 7".','Diag a frase: "ponteiro final da linha"','Diga a frase: "criar linha".','Diga a frase: "estrutura condicional".','Diga a frase: "execute a fun\xe7\xe3o gap na vari\xe1vel visitados com o argumento vari\xe1vel valor".','Diga a frase: "linha 9".','Diga a frase: "retorne falso".','Diga a frase: "linha 11".','Diga a frase: "criar linha".','Diga a frase: "linha 11".','Diga a frase: "execute a fun\xe7\xe3o gap na vari\xe1vel visitados com o argumento vari\xe1vel valor".','Diga a frase: "ponteiro final da linha".','Diga a frase: "criar linha".','Diga a frase: "nova vari\xe1vel soma igual a n\xfamero 0".','Diga a frase: "criar linha".','Diga a frase: "estrutura de repeti\xe7\xe3o para todo item em gap".','Diga a frase: "express\xe3o vari\xe1vel valor mais texto texto".','Diga a frase: "linha 14".','Diga a frase: "vari\xe1vel soma igual a express\xe3o vari\xe1vel soma mais gap vezes gap".','Diga a frase: "selecione a palavra gap".','Diga a frase: "vari\xe1vel item".','Diga a frase: "selecione a palavra gap".','Diga a frase: "vari\xe1vel item".','Diga a frase: "linha 16".','Diga a frase: "selecione a palavra gap".','Diga a frase: "execute a fun\xe7\xe3o feliz com os argumentos vari\xe1vel soma e vari\xe1vel visitados".','Diga a frase: "mude a linguagem para ingl\xeas".',"<i>A partir de agora os comandos de voz ser\xe3o ditos em ingl\xeas.</i>",'Say the phrase: "please go to line 8".','Say the phrase: "select the word gap".','Say the phrase: "print has".','Say the phrase: "line 11".','Say the phrase: "select the word gap".','Say the phrase: "print add".','Say the phrase: "run current file".',"<i>Validate the system output.</i>","End."],"en-US":["Click on the microphone to start recording.","Click on the first line of the code editor.",'Say the phrase: "line 5".','Say the phrase: "create line".','Say the phrase: "line 5".','Say the phrase: "conditional statement expression gap equals number 1".','Say the phrase: "variable value".','Say the phrase: "line 6".','Say the phrase: "return true".','Say the phrase: "line 7".','Say the phrase: "pointer end of line"','Say the phrase: "create a line".','Say the phrase: "conditional statement".','Say the phrase: "execute function has on variable visited with one argument".','Say the phrase: "variable value".','Say the phrase: "line 9".','Say the phrase: "return false".','Say the phrase: "line 11".','Say the phrase: "create line".','Say the phrase: "line 11".','Say the phrase: "execute function add on variable visited with argument variable value".','Say the phrase: "pointer end of line".','Say the phrase: "create line".','Say the phrase: "new variable sum equals number 0".','Say the phrase: "create line".','Say the phrase: "repetition statement for every item in gap".','Say the phrase: "execute function quote to string quote on variable value".','Say the phrase: "line 14".','Say the phrase: "variable sum equals expression variable sum plus gap times gap".','Say the phrase: "select the word gap".','Say the phrase: "variable item".','Say the phrase: "select the word gap".','Say the phrase: "variable item".','Say the phrase: "line 16".','Say the phrase: "select the word gap".','Say the phrase: "call function happy with arguments variable sum and variable visited".','Say the phrase: "run current file" or click on the green icon above the code editor.',"<i>Check the program output in the section below the code editor.</i>","Done."]},code:{"pt-BR":"var mostrar = console.log\n\nfunction feliz(valor, visitados) {\n    return gap\n}\n\nmostrar(23, feliz(23, new Set()))\nmostrar(4, feliz(4, new Set()))\nmostrar(440, feliz(440, new Set()))\nmostrar(3, feliz(3, new Set()))\n","en-US":"var print = console.log\n\nfunction happy(value, visited) {\n    return gap\n}\n\nprint(23, happy(23, new Set()))\nprint(4, happy(4, new Set()))\nprint(440, happy(440, new Set()))\nprint(3, happy(3, new Set()))\n"}}],c=l;var d=r(579);const h=o.createContext({});function u(e){const[a,r]=o.useState({language:e.lang,problemIndex:0}),t=o.useCallback((e=>r((a=>({...a,language:e})))),[]),n=o.useCallback((e=>r((a=>({...a,problemIndex:e})))),[]),i=window.matchMedia("only screen and (max-width: 900px)").matches,s=o.useMemo((()=>{return{language:a.language,problemIndex:a.problemIndex,changeProblem:n,changeLanguage:t,isMobile:i,problem:(e=a.problemIndex,r=a.language,{get id(){return l[e].id},get index(){return e},get title(){return l[e].title[r]},get placeholder(){return l[e].placeholder[r]},get statement(){return l[e].statement[r]},get solution(){return l[e].solution[r]},get code(){return l[e]&&l[e].code&&l[e].code[r]||""}})};var e,r}),[a.language,a.problemIndex,t,n,i]);return(0,d.jsx)(h.Provider,{value:s,children:e.children})}r(6690),r(3899),r(7689),r(8287);let p=null;const g=o.memo((function(e){const[a,r]=o.useState(""),[t,n]=o.useState(!1),{problem:l}=o.useContext(h);return o.useEffect((()=>{const e=document.querySelector("#code-editor");e&&(p=i()(e,{lineNumbers:!0,mode:"javascript",styleActiveLine:!0,matchBrackets:!0,theme:"idea",indentUnit:4,value:"// your code will be written here\n"+l.code}),s.A.setEditor(p),s.A.onRunCode({before:()=>n(!0),success:e=>r(e),error:e=>r(e.toString()),after:()=>n(!1)}))}),[]),o.useEffect((()=>{var e;null===(e=p)||void 0===e||e.setValue("// your code will be written here\n"+l.code),r("")}),[l.index,l.code]),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"code-editor-wrapper",children:[(0,d.jsxs)("div",{className:"filename",children:["MyLittleDarkAge.js",(0,d.jsxs)("span",{onClick:()=>s.A.runCode(),title:"Click here to run this file",className:""+(t?"loading":""),children:[t&&(0,d.jsx)("i",{className:"fa fa-circle-o-notch fa-spin fa-3x"}),!t&&(0,d.jsx)("i",{className:"fa fa-caret-right"})]})]}),(0,d.jsx)("div",{id:"code-editor"})]}),(0,d.jsxs)("div",{className:"output "+(t?"loading":""),children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("i",{className:"fa fa-angle-right"}),t&&(0,d.jsx)("span",{className:"fa-3x",children:(0,d.jsx)("i",{className:"fa fa-circle-o-notch fa-spin"})})]}),!t&&(0,d.jsx)("pre",{children:""===a?"empty output":a})]})]})}));var m=r(1929),f=r.n(m),v=r(3378);window.ipcRenderer=window.ipcRenderer||new class{constructor(){this.handles=new Map,this.onMain("Spoken:executeCommand",v.A.onComand),this.onMain("Config:changeEditor",((e,a)=>{this.send("Config:onChangeEditorState",[{name:"CODEMIRROR",status:"ON",current:!0}])})),this.onMain("VoiceRecognition:setRecording",((e,a)=>{this.send("VoiceRecognition:toggleRecording",a)}))}send(e){for(var a=arguments.length,r=new Array(a>1?a-1:0),o=1;o<a;o++)r[o-1]=arguments[o];if(this.handles.has(e)){const a=this.handles.get(e);setTimeout((()=>a({reply:this.send.bind(this)},...r)),75)}}removeAllListeners(e){this.handles.delete(e)}on(e,a){this.handles.set(e,(function(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),t=1;t<r;t++)o[t-1]=arguments[t];return a(...o)}))}onMain(e,a){this.handles.set(e,a)}};window.ipcRenderer;var b=r(6386),S=r.n(b),x=r(3332);class y{constructor(){this.recognizing=!1,this.recognizer=null,this.handlers=new Map,this.isAndroid=navigator.userAgent.toLowerCase().indexOf("android")>-1}static getRecognizer(){return null==y.instance&&(y.instance=new y),y.instance}async init(e){try{this.recognizer=new webkitSpeechRecognition}catch(a){return null!=this.handlers.get("error")?this.handlers.get("error")(a):null}try{const e=new webkitSpeechGrammarList;e.addFromString("#JSGF V1.0; grammar one; public <gap> = gap;",1),e.addFromString("#JSGF V1.0; grammar one; public <string> = string;",1),this.recognizer.grammars=e}catch(a){console.info("Safari does not implement webkitSpeechGrammarList.")}this.recognizer.continuous=!0,this.recognizer.lang=e,this.recognizer.interimResults=!1,this.recognizer.maxAlternatives=1,this.recognizer.onresult=e=>{console.log("[Chrome Recognizer] Results",e.results);const a=this.handlers.get("results");null!=a&&a(e.results,!0)},this.recognizer.onspeechend=e=>{console.log("[Chrome Recognizer] SpeechEnd",e)},this.recognizer.onend=e=>{console.log("[Chrome Recognizer] End",e),this.isAndroid&&this.recognizing&&(console.log("[Buggy Android Chrome Recognizer] Premature ending! We are still talking."),this.start())},this.recognizer.onnomatch=e=>{console.log("Could not recognize that!")},this.recognizer.onerror=e=>{const a=this.handlers.get("error");null!=a&&a(e.error)}}start(){if(null==this.recognizer)return console.error("[webapp.services.chrome-voice-recognition]: Session is closed!");this.recognizer.start(),this.recognizing=!0,console.info("[webapp.services.chrome-voice-recognition]: Started")}stop(){if(this.recognizing=!1,null==this.recognizer)return console.error("[webapp.services.chrome-voice-recognition]: Session is closed!");this.recognizer.stop(),console.info("[webapp.services.chrome-voice-recognition]: Stopped")}destroy(){console.info("[webapp.services.chrome-voice-recognition]: Destroyed"),this.recognizer&&(this.recognizer.stop(),this.recognizer.abort()),this.recognizer=null,this.handlers.clear()}on(e,a){return this.handlers.set(e,a),this}}y.instance=null;var w=r(1306);function _(e,a){const r=D(e.text,a),o=S().recognizePhrase(r.toLocaleLowerCase(),a);return null!=o&&(o.extra._rawVoiceToTextResponse=e,o.extra.phrase=r),o}function D(e,a){return e=e.replace(/(?<! )(:|\*|,|\.|\?|!)/gi," $1"),"pt-BR"===a?e.replace(/aspa(s|)/gi,"*"):e.replace(/quote(s|)/gi,"*")}const C=()=>{const[e,a]=(0,o.useState)(null),[r,t]=(0,o.useState)(null),{language:n="pt-BR",executeInternalCommand:i}=(0,o.useContext)(w.F),s=y.getRecognizer();(0,o.useEffect)((()=>(x.A.on("Spoken:executeCommandResult",(e=>{})),()=>{x.A.removeAllListeners("Spoken:executeCommandResult")})),[]),(0,o.useEffect)((()=>(console.log("[webapp.services.chrome-voice-recognition]: Initializing"),s.on("results",((e,r)=>{const o=e[e.length-1][0];if(!o.transcript||""===o.transcript.trim())return;o.text=o.transcript.trim();const t={text:D(o.text,n),isFinal:r,id:Date.now(),recognized:!1};if(r){const e=_(o,n);t.recognized=!!e,t.command=e?e.id:null,t.recognized&&(e&&e.id&&e.id.startsWith("__")?i(e):x.A.send("Spoken:executeCommand",e))}a(t)})).on("error",(e=>{t({__error:e,mainTitle:"Chrome STT provider is vendor specific",title:"This browser does not support the SpeechRecognition API",subTitle:"Try switching STT provider to Azure or accessing this website using Chrome or Edge",body:"Not all browsers support the <i>webkitSpeechRecognition</i> API which powers this project, currently only Google Chrome,\n                    MS Edge and Safari* have support to it. Try viewing this website on a supported browser or change the STT provider to Azure on\n                    top bar menu.<br/><br/>\n                    <b>You can still use the debug option to write commands instead of saying them.</b>"}),console.error("[webapp.services.chrome-voice-recognition.onResultError]: Error",e)})).init(n),()=>{s.destroy()})),[n]);return{results:e,start:async()=>{s.start()},stop:async()=>{s.stop()},error:r,setError:t,analyzeSentence:async function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;const o=_({text:D(e,n)},n),t={text:e,isFinal:!0,id:Date.now(),recognized:!!o,command:o?o.id:null},s=()=>{a(t),t.recognized&&(o&&o.id&&o.id.startsWith("__")?i(o):x.A.send("Spoken:executeCommand",o))};r?setTimeout(s,r):s()}}};var k=r(6858),R=r(9830);const j=localStorage.getItem("STT")||"azure",z=(0,R.factory)("azure"===j?k.A:C),A=o.memo((function(){const{language:e,isMobile:a}=o.useContext(h);return a?(0,d.jsx)(q,{language:e}):(0,d.jsx)(f(),{axis:"both",handle:".handle",cancel:".control",defaultPosition:{x:-250,y:-50},children:(0,d.jsx)("div",{children:(0,d.jsx)(E,{mode:"modalx",language:e})})})})),q=e=>{const[a,r]=o.useState(window.location.pathname.includes("webapp")&&""!==window.location.hash?"modalx":"widget"),t=document.querySelector(".speech2code-wrapper");return t&&"modalx"===a&&t.setAttribute("style",`--window-size-height: ${window.visualViewport.height-25}px`),(0,d.jsxs)(o.Fragment,{children:[(0,d.jsx)("div",{className:`overlay ${a}`}),(0,d.jsx)(E,{mode:a,openModal:()=>r("modalx"),closeModal:()=>r("widget"),language:e.language})]})},E=e=>(0,d.jsx)("div",{className:`speech2code-wrapper ${e.mode}`,children:(0,d.jsxs)("div",{className:"window",children:[(0,d.jsxs)("div",{className:"handle top-bar",children:[(0,d.jsx)("div",{className:"window-title",children:"Speech2Code"}),(0,d.jsx)("div",{className:"controls",children:(0,d.jsx)("div",{className:"control "+(e.closeModal?"":"disabled"),children:(0,d.jsx)("i",{className:"fa fa-window-close",onClick:()=>{e.closeModal&&(document.querySelector("#root").style="position: unset",window.location.hash="",e.closeModal())}})})})]}),(0,d.jsx)("div",{className:"window-content",children:(0,d.jsx)(z,{initialLang:e.language,mode:e.mode,onOpen:()=>{if(!e.openModal)return null;document.querySelector("#root").style="position: fixed",e.openModal()},onToggleRecording:a=>{a&&e.closeModal&&(document.querySelector("#root").style="position: unset",e.closeModal())}})})]})});function N(e){const{language:a,problem:r,changeProblem:t}=o.useContext(h);return(0,d.jsxs)("div",{className:"tutorial-problem",children:[(0,d.jsxs)("div",{className:"title",children:[r.title,"\xa0",(0,d.jsxs)("span",{style:{fontSize:"14px"},children:[r.index+1,"/5"]})]}),(0,d.jsx)("div",{className:"placeholder",dangerouslySetInnerHTML:{__html:r.placeholder}}),(0,d.jsxs)("div",{className:"statement",children:[(0,d.jsx)("div",{children:(0,d.jsx)("b",{children:"pt-BR"===a?"Problema":"Problem"})}),(0,d.jsx)("div",{dangerouslySetInnerHTML:{__html:r.statement}})]}),(0,d.jsxs)("div",{className:"solution",children:[(0,d.jsx)("div",{children:(0,d.jsx)("b",{children:"pt-BR"===a?"Poss\xedvel solu\xe7\xe3o":"Possible solution"})}),(0,d.jsx)("div",{children:(0,d.jsx)("ul",{children:r.solution.map(((e,a)=>(0,d.jsx)("li",{dangerouslySetInnerHTML:{__html:T(e)}},a)))})})]}),(0,d.jsxs)("div",{className:"footer",children:[(0,d.jsx)("div",{className:"prev",children:r.index<=0?null:(0,d.jsxs)("button",{onClick:()=>{window.ipcRenderer.send("VoiceRecognition:toggleRecording",!1),t(r.index-1)},children:["<<"," ","pt-BR"===a?"Anterior":"Previous"]})}),(0,d.jsx)("div",{className:"next",children:r.index<c.length-1?(0,d.jsxs)("button",{onClick:()=>{window.ipcRenderer.send("VoiceRecognition:toggleRecording",!1),t(r.index+1)},children:["pt-BR"===a?"Pr\xf3ximo":"Next"," ",">>"]}):null})]})]})}const T=e=>e.replace(/"(.*)"/gi,"<b>$1</b>"),B=o.memo((function(e){return(0,d.jsxs)(u,{lang:e.lang,children:[(0,d.jsx)(t.A,{}),(0,d.jsxs)("main",{className:"webapp",children:[(0,d.jsx)("div",{className:"tutorial",children:(0,d.jsx)(N,{})}),(0,d.jsx)("div",{className:"code-editor",children:(0,d.jsx)(g,{})}),(0,d.jsx)("div",{className:"speech2code",children:(0,d.jsx)(A,{})})]})]})}))},9115:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});class CodeMirrorEditor{constructor(){this.editor=null,this.runCodeLifecycle=null}getEditor(){const e=this.editor;return null==e?[null,new Error("No active text editor")]:[e,null]}setEditor(e){this.editor=e}onRunCode(e){this.runCodeLifecycle=e}runCode(){const{after:e,before:a,error:r,success:o}=this.runCodeLifecycle;a();const t=this.getEditor()[0].getValue();this.runThisCode(t).then(o).catch(r).finally(e)}async write(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log("[vscode-driver.robot-vscode.write]: Executing write("+e+")");const[a,r]=this.getEditor();if(null==a)throw r;if(a.getSelection().length>0){const r=a.listSelections()[0];a.replaceSelection(e),a.setSelection(r.anchor,{...r.head,ch:r.anchor.ch+e.length})}else a.replaceRange(e,a.getCursor())}runThisCode(code){return new Promise(((res,rej)=>{try{eval(`\n                    console.defaultLog = console.log.bind(console);\n                    console.logs = [];\n                    console.log = function() {\n                        console.defaultLog.apply(console, arguments);\n                        console.logs.push(Array.from(arguments));\n                    }\n    \n                    ${code}\n                `);const text=console.logs.map((e=>e.join(" "))).join("\n");setTimeout((()=>res(text)),1500)}catch(ex){const e=ex;setTimeout((()=>rej(e.toString())),1500)}finally{console.defaultLog&&(console.log=console.defaultLog.bind(console),delete console.defaultLog),delete console.logs}}))}}const codeMirrorEditorInstance=new CodeMirrorEditor,__WEBPACK_DEFAULT_EXPORT__=codeMirrorEditorInstance},3378:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var spoken__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6386),spoken__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(spoken__WEBPACK_IMPORTED_MODULE_0__),_editor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9115);window.editor=_editor__WEBPACK_IMPORTED_MODULE_1__.A;class SpokenInterface{constructor(){var e=this;this.onComand=async function(a,r){if(null==r)return a.reply("Spoken:executeCommandResult",r,{err:404});const[o,t]=await e.execute(r);return t?a.reply("Spoken:executeCommandResult",{error:t.toString()||!0}):(console.info("[Spoken]: Result: "+JSON.stringify(o||null)),a.reply("Spoken:executeCommandResult",{result:o}))}}async execute(command,parent){try{const fn=eval("var exports = {};\n"+command.impl),[args,err]=await this.parseArgs(command.args,command.id);if(null==args||null!=err)return[null,err];const result=await fn({...args,parent:parent},_editor__WEBPACK_IMPORTED_MODULE_1__.A,spoken__WEBPACK_IMPORTED_MODULE_0___default().context);return[result,null]}catch(err){console.error('[wrapper.SpokenInterface.onCommand] Failed to execute command "'+command.id+'" with:\n',err);const e=err instanceof Error?err:new Error("Unknown error occurred");return[null,e]}}async parseArgs(e,a){for(const r of Object.keys(e)){const o=e[r];if(Array.isArray(o)){const t=[];for(const e of o){if(!e.id||!e.impl||!e.lang){t.push(e);continue}const[r,o]=await this.execute(e,a);if(null==r||null!=o)return[null,o];t.push(r)}e[r]=t}else{if(!o.id||!o.impl||!o.lang)continue;const[t,n]=await this.execute(o,a);if(null!=n)return[null,n];e[r]=t}}return[e,null]}}const spokenInterface=new SpokenInterface,__WEBPACK_DEFAULT_EXPORT__=spokenInterface}}]);
//# sourceMappingURL=626.c11a4f66.chunk.js.map