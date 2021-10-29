(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8497],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,p=m["".concat(u,".").concat(d)]||m[d]||f[d]||i;return t?r.createElement(p,o(o({ref:n},c),{},{components:t})):r.createElement(p,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5362:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=t(4034),a=t(9973),i=(t(7294),t(3905)),o=["components"],l={},u="Read",s={unversionedId:"Linux/System Programming/File System/Read",id:"Linux/System Programming/File System/Read",isDocsHomePage:!1,title:"Read",description:"ReadFile function",source:"@site/docs/Linux/System Programming/File System/Read.md",sourceDirName:"Linux/System Programming/File System",slug:"/Linux/System Programming/File System/Read",permalink:"/docs/Linux/System Programming/File System/Read",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Path",permalink:"/docs/Linux/System Programming/File System/Path"},next:{title:"Common Commands",permalink:"/docs/Linux/Script/Commands/Common"}},c=[{value:"<code>ReadFile</code> function",id:"readfile-function",children:[],level:2},{value:"<code>Reader</code> Interface",id:"reader-interface",children:[],level:2},{value:"Read by buffer",id:"read-by-buffer",children:[],level:2},{value:"Using buffer",id:"using-buffer",children:[],level:2}],f={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"read"},"Read"),(0,i.kt)("h2",{id:"readfile-function"},(0,i.kt)("inlineCode",{parentName:"h2"},"ReadFile")," function"),(0,i.kt)("p",null,"This function in ",(0,i.kt)("inlineCode",{parentName:"p"},"io/ioutil")," package use a small 512 bytes buffer to read a file, and it load the whole content into the memory. It may not be a good idea when reading large files. We will use buffer to address this problem."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "io/ioutil"\n    "os"\n)\n\nfunc main() {\n    if len(os.Args) != 2 {\n        fmt.Println("Please specify a path.")\n        return\n    }\n    b, err := ioutil.ReadFile(os.Args[1])\n    if err != nil {\n        fmt.Println("Error:", err)\n    }\n    fmt.Println(string(b))\n}\n\n')),(0,i.kt)("h2",{id:"reader-interface"},(0,i.kt)("inlineCode",{parentName:"h2"},"Reader")," Interface"),(0,i.kt)("p",null,"The reader interface define a method that is able to read file chunk by chunk. This make the ",(0,i.kt)("inlineCode",{parentName:"p"},"Reader")," more memory-efficient than the ",(0,i.kt)("inlineCode",{parentName:"p"},"ReadFile")," function. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Read")," function fill the given buffer and return how many bytes it read. One special error is ",(0,i.kt)("inlineCode",{parentName:"p"},"EOF")," (End of File) (",(0,i.kt)("inlineCode",{parentName:"p"},"io.EOF"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Reader interface {\n    Read(p []byte) (n int, err error)\n}\n")),(0,i.kt)("h2",{id:"read-by-buffer"},"Read by buffer"),(0,i.kt)("p",null,"We use the buffer to read a file. In a long-run program, we have to close the unneed file to prevent reaching the file limit."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ulimit -u")," shows how many files can be opened by a process."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lsof -p <PID>")," shows the number of current opened files of a process.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    if len(os.Args) != 2 {\n        fmt.Println("Please specify a file")\n        return\n    }\n    f, err := os.Open(os.Args[1])\n    if err != nil {\n        fmt.Println("Error:", err)\n        return\n    }\n    defer f.Close() // we ensure close to avoid leaks\n\n    var (\n        b = make([]byte, 1024)\n    )\n    for n := 0; err == nil; {\n        n, err = f.Read(b)\n        if err == nil {\n            fmt.Print(string(b[:n])) // only print what\'s been read\n        }\n    }\n    if err != nil && err != io.EOF { // we expect an EOF\n        fmt.Println("\\n\\nError:", err)\n    }\n}\n')),(0,i.kt)("h2",{id:"using-buffer"},"Using buffer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "bytes"\n    "fmt"\n)\n\nfunc main() {\n    var b = bytes.NewBuffer([]byte{})\n    var texts = []string{\n        `As he came into the window`,\n        `It was the sound of a crescendo\nHe came into her apartment`,\n        `He left the bloodstains on the carpet`,\n        `She ran underneath the table\nHe could see she was unable\nSo she ran into the bedroom\nShe was struck down, it was her doom`,\n    }\n    for i := range texts {\n        b.Reset()\n        b.WriteString(texts[i])\n        fmt.Println("Length:", b.Len(), "\\tCapacity:", b.Cap())\n    }\n}\n\n')))}m.isMDXComponent=!0}}]);