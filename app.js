const express = require('express');
const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');
const app = express();

function router(endPath) {
    const files = fs.readdirSync(path.join(__dirname, endPath))

    files.forEach(file => {
        const filePath = path.join(__dirname, endPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isFile()) {
            if (path.extname(file) === ".jpg" || path.extname(file) === ".png") {
                app.get('/images/' + file, (req, res) => {
                    res.sendFile(filePath);
                })
            } else {
                app.get(`/${file}`, (req, res) => {
                    res.sendFile(filePath);
                })
            }

        } else {
            router(endPath + `/${file}`);
        }
    })
}

router('public');

app.listen(5000);