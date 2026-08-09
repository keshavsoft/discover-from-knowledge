import scout from "./scout.js";
import sifter from "./sifter.js";

import { fileNamesJson as getFileNamesJsonFromNpm } from "pattern-collector-base-files";

const startFunc = (inTargetPath) => {

    const fileNamesJson = getFileNamesJsonFromNpm();
    const files = scout(inTargetPath);

    const key = sifter({
        inObject: fileNamesJson,
        inFiles: files
    });

    return {
        success: !!key,
        discovery: {
            fileType: key,
            targetPath: inTargetPath,
            discoveredFiles: files,
            matchedFile: key ? fileNamesJson[key]?.fileName : undefined
        }
    };
};

export default startFunc;