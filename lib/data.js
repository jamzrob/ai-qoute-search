
import fs from "fs";
import path from "path";


const getDir = () => {
    if(process.env.DATA_PATH) {
        return path.join(process.env.HOME, process.env.DATA_PATH);
    }
    return "./sample_data";
}

export const getData = () => {
    const dir = getDir();
    const data = []
    
    const files = fs.readdirSync(dir)

    files.forEach(function (file) {
        const bookPath = path.join(dir, file)
        data.push(bookPath)
    })
    return data;
}
