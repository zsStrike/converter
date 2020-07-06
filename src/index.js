const path = require('path');
const mammoth = require('mammoth');
const fs = require('fs');


const argv = require('minimist')(process.argv.slice(2));
const [infile, outfile] = [path.resolve(process.cwd(), argv.i) , path.resolve(process.cwd(), argv.o)];


const options = {
    styleMap: [
        "p[style-name='Heading 1'] => h4.card-title.text-center.mb-4:fresh",
        "p[style-name='Heading 4'] => h5.text-center:fresh",
        "p[style-name='Heading 2'] => h5:fresh",
        "p[style-name='Heading 3'] => h6:fresh",
        "p => p.card-text"
        
    ],
    includeDefaultStyleMap: false,
    convertImage: mammoth.images.imgElement(image => {
        return image.read('base64').then(res => {
            return {
                src: `data:${image.contentType};base64,${res}`
            }
        })
    }),
    
};

mammoth.convertToHtml({
    path: infile,
}, options).then(res => {
    const html = res.value;
    fs.writeFileSync(outfile, html);
}).done();

console.log(infile, outfile);
