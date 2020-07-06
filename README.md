# Converter

首先安装依赖：
```
npm i 
```

接着输入转换命令：
```
node src/index.js -i path/to/docx/file -o path/to/html/file
```

本转换器实际上就是一个简单的元素转换器，主要转换了四种元素：
```
"p[style-name='Heading 1'] => h4.card-title.text-center.mb-4:fresh",
"p[style-name='Heading 4'] => h5.text-center:fresh",
"p[style-name='Heading 2'] => h5:fresh",
"p[style-name='Heading 3'] => h6:fresh",
"p => p.card-text"
```

也就是说，在编辑 docx 文档的时候只需要使用标题1，标题2，标题3，标题4 和正文即可，转换器会自动进行转换。