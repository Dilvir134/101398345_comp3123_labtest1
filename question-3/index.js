const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

const removeLogFiles = () => {
    if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);

        files.forEach(file => {
            const filePath = path.join(logsDir, file);
            console.log(`Deleting file: ${file}`);
            fs.unlinkSync(filePath);
        });

        fs.rmdirSync(logsDir);
        console.log(`Logs directory removed: ${logsDir}`);
    } else {
        console.log('Logs directory does not exist. No files to delete.');
    }
};

const createLogFiles = () => {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log(`Logs directory created at: ${logsDir}`);
    }

    process.chdir(logsDir);

    for (let i = 1; i <= 10; i++) {
        const logFileName = `log${i}.txt`;
        fs.writeFileSync(logFileName, `This is the content for ${logFileName}`);
        console.log(`Created file: ${logFileName}`);
    }
};

removeLogFiles();
createLogFiles();