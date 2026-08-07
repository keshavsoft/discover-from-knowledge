import fs from "fs";

const scout = (inTargetPath) => {
    try {

        const files = fs.readdirSync(inTargetPath, { withFileTypes: true })
            .filter(item => item.isFile())
            .map(item => item.name);

        return files;

    } catch (error) {
        console.log("error : ", error);
    };
};

export default scout;
