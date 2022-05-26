const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');
const fs = require('fs');
const axios = require('axios').default;
const moment = require('moment');
const date = moment().format("DD-MM-YYYY");

console.clear();
console.log("Bem vindo ao bot do tio Pedro para videos kwai 🎶😎");
const verify = fs.existsSync(`videos`);
if (verify == false) {
    let f = fs.mkdirSync("./videos", { recursive: true }, (error) => console.log("Não foi possivel criar a pasta videos - Ocorreu um erro"));
    if (f) {
        console.log("Pasta videos criada com sucesso");
    }
}

async function robo() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const linkkwai = readlineSync.question('Link desejado (Para usar arquivo links digite "all"):') || '';
    const foreachkwai = require("./links.json")
    const generateRandomString = (num) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result1 = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < num; i++) {
            result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result1;
    }

    if (linkkwai == "all" && foreachkwai != null) {
        for (let i = 0; i < foreachkwai.length; i = i + 1) {
            try {
                await page.goto(foreachkwai[i]);

                const resultado = await page.evaluate(() => {
                    return document.querySelector("#video-ele").src
                });
                console.log(resultado);

                let response = await axios({
                    method: 'GET',
                    url: resultado,
                    responseType: 'stream'
                });

                const file = response.data.pipe(fs.createWriteStream(`videos/${generateRandomString(7)} ${date}.mp4`));

                file.on("finish", () => {
                    console.log("Download Completed");
                });
            } catch (error) {
                console.log('video não existe');
            }
        }
    } else {
        try {
            await page.goto(linkkwai);

            const resultado = await page.evaluate(() => {
                return document.querySelector("#video-ele").src
            });
            console.log(resultado);

            let response = await axios({
                method: 'GET',
                url: resultado,
                responseType: 'stream'
            });

            const file = response.data.pipe(fs.createWriteStream(`videos/${generateRandomString(7)} ${date}.mp4`));

            file.on("finish", () => {
                console.log("Download Completed");
            });
        } catch (error) {
            console.log('video não existe');
        }
    }
    await browser.close();
}

robo();