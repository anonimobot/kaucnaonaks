bla = process.cwd()

var fs = require('fs')
var hx = require('hxz-api');
var axios = require('axios')
var zrapi = require('zrapi')
var jpeg = require('jpeg-js')
const { GOOGLE_IMG_SCRAP , GOOGLE_QUERY } = require('google-img-scrap');
var yts = require('yt-search')
var multer = require('multer')
var Ddos = require('ddos')
var express = require('express')
var request = require('request');
var cheerio = require('cheerio');
var fetch = require('node-fetch')
var FormData = require('form-data')
var canvacord = require("canvacord")
var { igstory} = require('./lib/scrape.js');
var canvasx = require('discord-canvas')
var { fromBuffer } = require('file-type')
//var aexm = require('@lolikillers/aexm-api');
var gerarnick = require('./lib/gerarnick.js')
var { mediafireDl } = require('./lib/mediafire.js');
var buffer = require('./lib/upload.js')
var exec = require('child_process').exec;
var { Maker } = require('imagemaker.js')
var TikTokScraper = require('tiktok-scraper');
var download = require('@phaticusthiccy/open-apis')
var thiccysapi = require('textmaker-thiccy');
var { pinterest } = require('./lib/funções.js')
var wiki = require("@dada513/wikipedia-search")
var { ytplay3 } = require('./lib/yt-down/lib/yt.js')
var trans = require('@vitalets/google-translate-api')
const {savefrom} = require('./lib/savefrom.js')
var xfar = require('xfarr-api')
cors = require('cors')

const PORT = process.env.PORT || 3000
var { color } = require('./lib/color.js')
var { ytMp3, ytMp4, ytPlay, ytPlayMp4, ytSearch} = require('./lib/yt.js')
const { fbdown } = require("./lib/facebook.js")
const { yta, ytv } = require("./lib/yta.js")
const {  facebook } = require('./lib/downloader')
var { ytMp3_2, ytMp4_2, ytPlay_2 } = require('./youtubev2.js')
var { TiktokDownloader } = require('./tiktokdl.js')
var { nerding, happy ,gpwhatsapp, apkmody, pornhubsrc, uptodown, igstalk, soundl, playstore, manga, anime, hentaistube, pornogratis, filme, wattpad } = require('./scraper.js')
var { PlayStoreSearch, MercadoLivreSearch, AmazonSearch, AmericanasSearch, SubmarinoSearch, Horoscopo } = require('./lib/scraper/pesquisas.js')

var { G1, Poder360, JovemPan, Uol, CNNBrasil, Estadao } = require('./lib/scraper/noticias.js')

var { facebookDownloader, instaVideoV1 } = require('./lib/scraper/downloaders.js')

const { y2mateV, y2mateA, wikiSearch, jagoKata} = require('./lib/y2mate');

const { aiovideodl, umma, ytPlay_3} = require('./scraper-2.js');

async function getBuffer(url) {
he = await fetch(url).then(c => c.buffer())
 return he
}
async function Kibar(url) {
he = await fetch(url).then(c => c.json())
 return he
}

const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3} = require('./youtubefofs.js')

var translate = (text, lang) => { return new Promise(async (resolve, reject) => { trans(text, { conn: 'gtx', to: lang }).then((res) => resolve(res.text)).catch((err) => reject(err)) });}

async function getBuffer(url) {
he = await fetch(url)
.then(c => c.buffer())
return he
}

var ddos = new Ddos({burst:4, limit:30, testmode:true, whitelist:['187.21.11.237']});

/////\\\\

var key = ["anônimo-api-v2", "VIENO-BOT", "key-do-juniornerd"]

var tokenc = ["anônimo-api-vip", "key-prem-jn","key-scheyot-vipkkk"]

/////\\\\
const router = express.Router();

var upload = multer()

var app = express()
 
app.use(cors())
app.set("json spaces",2)
app.use(express.static("public"))

var blacklist = require('express-blacklist');
app.use(blacklist.blockRequests('blacklist.txt'));

////PAGINA INICIAL Q IRA REDIRECIONAR PRA /DOC
 
router.use(ddos.express);
app.get("/", (req,res,next) => {
console.log("Beep");
res.end("Boop");
})
app.use(router);
 
app.get('/api/keyerrada',(req, res) => {
apikey = req.query.apikey
if(!key.includes(apikey)) {
return res.json({status:false,msg:'A apikey está inválida, entre em contato com o criador.'})
} else {
return res.json({status: true, msg:'Apikey funcionando perfeitamente!'})
}})


app.get('/api/validartoken',(req, res) => {
token = req.query.token
if(!tokenc.includes(token)) {
return res.json({status:false,msg:'O token está inválido, entre em contato com o criador.'})
} else {
return res.json({status: true, msg:'O token funcionando perfeitamente!'})
}})

app.get('/welcome', async (req, res, next) => {
if (!req.query.titulo) return res.json({ status: 404, error: 'Insira o parametro: titulo'})
if (!req.query.nome) return res.json({ status: 404, error: 'Insira o parametro: nome'})
if (!req.query.perfil) return res.json({ status: 404, error: 'Insira o parametro: perfil'})
if (!req.query.fundo) return res.json({ status: 404, error: 'Insira o parametro: fundo'})
if (!req.query.grupo) return res.json({ status: 404, error: 'Insira o parametro: grupo'})

let welcomer = await new canvasx.Welcome()
.setUsername(req.query.nome)
.setDiscriminator("2022")
.setText("title", req.query.titulo)
.setText("message", req.query.grupo)
.setAvatar(req.query.perfil)
.setColor('border', '#00100C')
.setColor('username-box', '#00100C')
.setColor('discriminator-box', '#00100C')
.setColor('message-box', '#00100C')
.setColor('title', '#00FFFF')
.setBackground(req.query.fundo)
.toAttachment()
let base64 = `${welcomer.toBuffer().toString('base64')}`
require('fs').writeFileSync('welkom.png', base64, 'base64')
res.sendFile(bla+'/welkom.png')
})

app.get('/api/eletronica.mp3', (req, res) => {
json = fs.readFileSync('./lib/audios/eletronica.mp3')
res.type('mp3')
res.send(json)
})

app.get('/loli', (req, res) => {
(async() => {
json = JSON.parse(fs.readFileSync('lib/lolis.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/shota', (req, res) => {
(async() => {
json = JSON.parse(fs.readFileSync('lib/shotas.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/random/metadinha', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
         json = JSON.parse(fs.readFileSync(bla +'/lib/metadinha.json').toString())
         random = json[Math.floor(Math.random() * json.length)]
         res.json(random) 
})

app.get('/+18/loli', (req, res) => {
(async() => {
json = JSON.parse(fs.readFileSync('lib/nsfwlolis.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/api/facebook', async(req, res, next) => {
apikey = req.query.apikey;
url = req.query.url
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
 if (!url) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: url"})
fbdown(url).then(data => {
res.json({
status: true,
código: 999,
criador: `Gabriel e Guilherme`,
resultado: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

router.all('/api/instagram', async (req, res) => {
url = req.query.url
if(!url)return res.json({
status:false,
motivo:'Coloque o parâmetro: url'
})
apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
auu = await Kibar(`https://saipulanuar.ga/api/downloader/instagram?url=${url}`)
dngstz = await axios.get(`https://api.brizaloka-api.tk/sociais/instagram?apikey=brizaloka&url=${url}`)
res.json({
status: true,
código: 999,
criador: `Gabriel e Guilherme`,
resultado: {
author: `@${dngstz.data[0].author}`,
descrição: `${auu.result.title}`,
download: `${auu.result.url}`
}
})
})

router.all('/download/xvideos', async (req, res) => {
url = req.query.url
if(!url)return res.json({
status:false,
motivo:'Coloque o parâmetro: url'
})
apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
auu = await Kibar(`https://ayanami-prem.herokuapp.com/api/download/xvideos?link=${url}&apikey=apikeyFree30days`)
res.json({
status: true,
código: 999,
criador: `Gabriel e Guilherme`,
resultado: {
link: `${auu.resultado.link}`,
foto: `${auu.resultado.foto}`,
}
})
})

    app.get('/api/xvideos', async(req, res, next) => {    
apikey = req.query.apikey
q = req.query.q
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!q) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro q?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://ayanami-prem.herokuapp.com/api/xvideos/pesquisa?nome=${q}&apikey=apikeyFree30days`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

/*app.get('/api/happymod', async(req, res, next) => {
apikey = req.query.apikey
q = req.query.q
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!q) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro q?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://p7api.xyz/api/happymod?nome=${q}&apikey=6bb2f5-22a158-0441f9-6b4308-115f0f`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})
*/

app.get('/api/uptodown', async(req, res, next) => {
apikey = req.query.apikey
nome = req.query.nome
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!nome) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro nome?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://app-lolizita-api.herokuapp.com/api/uptodown/pesquisa?nome=${nome}&apikey=SuaApikey`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.result;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/githubuser', async(req, res, next) => {
apikey = req.query.apikey
usuario = req.query.usuario
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!usuario) return res.json({ status : false, creator : `Victor`, message : "Cade o parametro q?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://api.brizaloka-api.tk/search/githubuser?apikey=brizaloka&query=${usuario}`))
    .then(response => response.json())
        .then(hasil => {
        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `${criador}`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/filme', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
 if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
filme(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
code_by: `@Gabriel`,
pesquisa: resultado
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/happymod', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
 if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
happy(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
pesquisa: resultado
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})



app.get('/api/pornogratis', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
 if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
 pornogratis(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})


app.get('/api/nerding', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
 if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
 nerding(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})


app.get('/api/playstore', async(req, res, next) => {
apikey = req.query.apikey;
nome = req.query.nome
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
 if (!nome) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: nome"})
PlayStoreSearch(nome).then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/mercadolivre', async(req, res, next) => {
apikey = req.query.apikey;
nome = req.query.nome
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
 if (!nome) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: nome"})
MercadoLivreSearch(nome).then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/amazon', async(req, res, next) => {
apikey = req.query.apikey;
nome = req.query.nome
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
 if (!nome) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: nome"})
AmazonSearch(nome).then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})
/*
app.get('/api/americanas', async(req, res, next) => {
apikey = req.query.apikey;
nome = req.query.nome
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
 if (!nome) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: nome"})
AmericanasSearch(nome).then(dados => {
res.json({
pesquisa: dados
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/submarino', async(req, res, next) => {
apikey = req.query.apikey;
nome = req.query.nome
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
 if (!nome) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: nome"})
SubmarinoSearch(nome).then(dados => {
res.json({
pesquisa: dados
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})
*/

app.get('/api/horoscopo', async(req, res, next) => {
apikey = req.query.apikey;
signo = req.query.signo
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
 if (!signo) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: signo"})
Horoscopo(signo).then(res => {
res.json({
pesquisa: res
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})


app.get('/api/noticias/globo', async(req, res, next) => {
apikey = req.query.apikey;
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
G1().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/noticias/jovempan', async(req, res, next) => {
apikey = req.query.apikey;
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
JovemPan().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/noticias/poder360', async(req, res, next) => {
apikey = req.query.apikey;
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
Poder360().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/noticias/uol', async(req, res, next) => {
apikey = req.query.apikey;
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
Uol().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/noticias/estadao', async(req, res, next) => {
apikey = req.query.apikey;
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
Estadao().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/noticias/cnnbrasil', async(req, res, next) => {
apikey = req.query.apikey;
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
CNNBrasil().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/gpwhatsapp', async(req, res, next) => {
q = req.query.q;
apikey = req.query.apikey;
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
  if(!q)return res.json({status:false,msg:'Cadê o parâmetro q?'})
 gpwhatsapp(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/linkswhatapp', async(req, res, next) => {
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
  if(key.includes(apikey)){
    fetch(encodeURI(`https://ayanami-prem.herokuapp.com/api/linkswhatapp?apikey=apikeyFree30days`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/stalknpm', async(req, res, next) => {
apikey = req.query.apikey
npm = req.query.npm
if(!apikey)return res.json({status:false,msg:'Cadê o parametro apikey?'})
  if(!npm)return res.json({status:false,msg:'Cadê o parâmetro npm?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
  if(key.includes(apikey)){
    fetch(encodeURI(`https://ayanami-prem.herokuapp.com/api/stalk/npm/?npm=${npm}&apikey=apikeyFree30days`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.result;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/stalkpin', async(req, res, next) => {
apikey = req.query.apikey
usuario = req.query.usuario
if(!apikey)return res.json({status:false,msg:'Cadê o parametro apikey?'})
  if(!usuario)return res.json({status:false,msg:'Cadê o parâmetro usuário?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
  if(key.includes(apikey)){
    fetch(encodeURI(`https://app-lolizita-api.herokuapp.com/api/stalk/pinterest/?usuario=${usuario}&apikey=SuaApikey`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/frases', async(req, res, next) => {
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'Cadê o parametro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
  if(key.includes(apikey)){
    fetch(encodeURI(`https://ayanami-prem.herokuapp.com/api/frases?apikey=apikeyFree30days`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/htmlsite', async(req, res, next) => {
apikey = req.query.apikey
link = req.query.link
if(!apikey)return res.json({status:false,msg:'Cadê o parametro apikey?'})
  if(!link)return res.json({status:false,msg:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
  if(key.includes(apikey)){
    fetch(encodeURI(`https://ayanami-prem.herokuapp.com/api/htmlsite?link=${link}&apikey=apikeyFree30days`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/fuckmylife', async(req, res, next) => {
apikey = req.query.apikey
q = req.query.q
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!q) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro q?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://api.brizaloka-api.tk/random/fuckmylife?apikey=brizaloka`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/simsimi', async(req, res, next) => {
apikey = req.query.apikey
text = req.query.text
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!text) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro text?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://api.brizaloka-api.tk/ia/simsimi?apikey=brizaloka&text=${text}`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/apkmody', async(req, res, next) => {
apikey = req.query.apikey
q = req.query.q
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!q) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro q?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://isyubii-api.tk/api/apkmody?apikey=key-free&nome=${q}`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/freefire', async(req, res, next) => {
apikey = req.query.apikey
q = req.query.q
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!q) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro q?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://ayu.p7api.xyz/api/pesquisa/ff?nome=${q}&apikey=saladakk`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/rexdl', async(req, res, next) => {
apikey = req.query.apikey
q = req.query.q
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!q) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro q?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://p7api.xyz/api/rexdl?nome=${q}&apikey=6bb2f5-22a158-0441f9-6b4308-115f0f`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/moddroid', async(req, res, next) => {
apikey = req.query.apikey
q = req.query.q
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!q) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro q?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://p7api.xyz/api/moddroid?nome=${q}&apikey=6bb2f5-22a158-0441f9-6b4308-115f0f`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/sfile', async(req, res, next) => {
apikey = req.query.apikey
q = req.query.q
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!q) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro q?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://p7api.xyz/api/sfile?nome=${q}&apikey=6bb2f5-22a158-0441f9-6b4308-115f0f`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/playmp4-2', async(req, res, next) => {
apikey = req.query.apikey
q = req.query.q
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!q) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro q?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://p7api.xyz/api/ytplaymp4?nome=${q}&apikey=6bb2f5-22a158-0441f9-6b4308-115f0f`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/ytmp4-2', async(req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!url) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro url?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://p7api.xyz/api/ytmp4?link=${url}&apikey=6bb2f5-22a158-0441f9-6b4308-115f0f`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})


app.get('/pesquisa/filme', async(req, res, next) => {
apikey = req.query.apikey
q = req.query.q
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!q) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro q?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://isyubii-api.tk/api/filme?apikey=key-free.2023&nome=${q}`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/covidmundo', async(req, res, next) => {
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
  if(key.includes(apikey)){
    fetch(encodeURI(`https://api.brizaloka-api.tk/covidmundo?apikey=brizaloka`))
    .then(response => response.json())
        .then(hasil => {
        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/covidbrasil', async(req, res, next) => {
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
  if(key.includes(apikey)){
    fetch(encodeURI(`https://api.brizaloka-api.tk/covidbrasil?apikey=brizaloka`))
    .then(response => response.json())
        .then(hasil => {
        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/covidbrasil', async(req, res, next) => {
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
  if(key.includes(apikey)){
    fetch(encodeURI(`https://api.brizaloka-api.tk/covidbrasil?apikey=brizaloka`))
    .then(response => response.json())
        .then(hasil => {
        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/wikipedia', async(req, res, next) => {
apikey = req.query.apikey
q = req.query.q
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!q) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro q?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://api.brizaloka-api.tk/search/wikipedia?apikey=brizaloka&query=${q}`))
    .then(response => response.json())
        .then(hasil => {
        var pesquisa = hasil.pesquisa;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 pesquisa
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/githubuser', async(req, res, next) => {
apikey = req.query.apikey
usuario = req.query.usuario
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!usuario) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro q?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://api.brizaloka-api.tk/search/githubuser?apikey=brizaloka&query=${usuario}`))
    .then(response => response.json())
        .then(hasil => {
        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

router.all('/api/gerarpessoa', async (req, res) => {
apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
auu = await Kibar(`https://apirest.gestorvip.com/api/gerarpessoa?apikey=Toms123`)
res.json({
status: true,
código: 999,
criador: `Gabriel e Guilherme`,
resultado: {
cpf: `${auu.cpf}`,
nome: `${auu.nome}`,
cep: `${auu.cep}`,
}
})
})

app.get('/api/igstory', async (req, res, next) => {
          apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!url) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro url?"}) 
        if(key.includes(apikey)){
       igstory(url)
	.then(data => {
		var result = data;
		res.json({
			result
		})
		})
         .catch(e => {
         	console.log(e);
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/simi', async (req, res, next) => {
          apikey = req.query.apikey
text = req.query.text
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!text) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro text?"})
        if(key.includes(apikey)){
       fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=pt`))
        .then(response => response.json())
        .then(data => {
        var result = data.success;
             res.json({
                 result
             })
         })
         .catch(e => {
         	console.log(e);
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/pinterest', (req, res) => {
(async() => {
apikey = req.query.apikey
text = req.query.text
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!text) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro text?"})
pin = await pinterest(text)
ac = pin[Math.floor(Math.random() * pin.length)]
res.type('jpg')
res.send(await getBuffer(ac))
})()
})

app.get('/api/download', (req, res) => {
(async() => {
apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!url) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro url?"})
wew = await savefrom(url)
res.type('mp4')
res.send(await getBuffer(wew.url[0].url))
})()
})

app.get('/api/download', (req, res) => {
(async() => {
apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!url) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro url?"})
wew = await savefrom(url)
res.type('mp4')
res.send(await getBuffer(wew.url[0].url))
})()
})

app.get('/api/youtubedl', (req, res) => {
(async() => {
apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!url) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro url?"})
wew = await savefrom(url)
res.type('mp4')
res.send(await getBuffer(wew.meta.url.url))
})()
})

router.get('/api/attp', async (req, res, next) => {
      var texto = req.query.texto
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
      if(!texto)return res.json({status:false, motivo:'Cadê o parâmetro texto?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://api.brizaloka-api.tk/ttp/attp1?apikey=brizaloka&text=${texto}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/attp2', async (req, res, next) => {
      var texto = req.query.texto
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'Cadê o parâmetro apikey?'})
      if(!texto)return res.json({status:false, motivo:'Cadê o parâmetro texto?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://api.brizaloka-api.tk/ttp/attp2?apikey=brizaloka&text=${texto}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/attp3', async (req, res, next) => {
      var texto = req.query.texto
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
      if(!texto)return res.json({status:false, motivo:'Cadê o parâmetro texto?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://api.brizaloka-api.tk/ttp/attp3?apikey=brizaloka&text=${texto}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/attp4', async (req, res, next) => {
      var texto = req.query.texto
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
      if(!texto)return res.json({status:false, motivo:'Cadê o parâmetro texto?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://api.brizaloka-api.tk/ttp/attp4?apikey=brizaloka&text=${texto}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/attp5', async (req, res, next) => {
      var texto = req.query.texto
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
      if(!texto)return res.json({status:false, motivo:'Cadê o parâmetro texto?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://api.brizaloka-api.tk/ttp/attp5?apikey=brizaloka&text=${texto}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/attp6', async (req, res, next) => {
      var texto = req.query.texto
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
      if(!texto)return res.json({status:false, motivo:'Cadê o parâmetro texto?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://api.brizaloka-api.tk/ttp/attp6?apikey=brizaloka&text=${texto}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/api/ytmp4-2', async(req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!url) return res.json({ status : false, creator : `Victor`, message : "Cade o parametro url?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://p7api.xyz/api/ytmp4?link=${url}&apikey=p7ori`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/ytmp3-2', async(req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!url) return res.json({ status : false, creator : `Victor`, message : "Cade o parametro url?"}) 
  if(key.includes(apikey)){
    fetch(encodeURI(`https://api.brizaloka-api.tk/sociais/ytmp3?apikey=brizaloka&url=${url}`))
    .then(response => response.json())
        .then(hasil => {
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 title: `${hasil.title}`,
                 dl_link: `${hasil.dl_link}`
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/api/fazernick', async (req, res) => {
apikey = req.query.apikey  
let nome = req.query.nome || res.json({msg: 'insira o parâmetro: ?nome='})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
await gerarnick(nome)
.then(nicks => {
res.send(nicks) 
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/mediafire', async (req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!url) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro url?"})
mediafireDl(url)
.then(data => {
var resultado = data;
res.json({
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/gimage',(req,res) => {
apikey = req.query.apikey
txt = req.query.txt
if(!txt) return res.json({msg: "Faltando o parametro txt"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
GOOGLE_IMG_SCRAP({
search: txt,
query: {
EXTENSION: GOOGLE_QUERY.EXTENSION.JPG
},
limit: 5,
domains: ["alamy.com", "istockphoto.com", "vecteezy.com", "pinterest.com", "google.com"],
excludeWords: ["black", "white"], //If you don't like black and white cats
custom: "name=content&name2=content2",
safeSearch: false,
 // excludeDomains: ["istockphoto.com", "alamy.com"]
}).then(e => {
resultado = e
res.json({
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
}) 
})


app.get('/api/tiktok-4', async (req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if (!url) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro url?"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
     TikTokScraper.getVideoMeta(url)
         .then(data => {
             console.log(data)
             var resultado = data;
res.json({
resultado
             })
         })
         .catch(e => {
             res.json({erro:'Erro no Servidor Interno'})
         })
})

app.get('/api/wattpad',  async (req, res, next) => {
apikey = req.query.apikey
query = req.query.query
if (!query) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro query?"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
wattpad(query).then(result => {
var resultado = result;
res.json({
criador: `Gabriel e Guilherme`,
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/tiktok-3',  async (req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if (!url) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro url?"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
aexm.ttdownloader(url)
.then(data => {
var resultado = data;
res.json({
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/instareels', async (req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if (!url) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro url?"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
download.lib_reels(url).then(data => {
var resultado = data.payload;
res.json({
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/tiktok-2', async (req, res, next) => {
apikey = req.query.apikey
url = req.query.url
if (!url) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro url?"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
download.tiktok(url).then(data => {
var resultado = data;
res.json({
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

// LOGOS 2 TEXTO

app.get('/api/marvel', async (req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/pornhub', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/space',  async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!texto2) return res.json({status:false,msg:'cade o parametro texto2'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/stone', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/steel', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/3d-steel-text-effect-877.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/grafity', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/glitch3', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/america', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


// LOGOS 1 TEXTO

app.get('/api/angelwing', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().Ephoto360("https://en.ephoto360.com/create-colorful-angel-wing-avatars-731.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

const {
PlayLinkMP3,
PlayLinkMP4,
PlayAudio,
PlayVideo,
ytSearch2
} = require("./youtubefofs");

var criador = "anonimo-bot"
 
app.get('/youtube/playmp3', async(req, res, next) => {
apikey = req.query.apikey;
 q = req.query.q
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
PlayAudio(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `Erro no Servidor Interno`
 })})})
 
 router.all('/youtube/playmp3-2', async (req, res) => {
q = req.query.q
if(!q)return res.json({
status:false,
motivo:'Coloque o parâmetro: q'
})
apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
auu = await Kibar(`https://ayu.p7api.xyz/api/dl/play?nome=${q}&apikey=saladakk`)
res.json({
status: true,
código: 999,
criador: `Gabriel e Guilherme`,
resultado: {
título: `${auu.resultado.título}`,
thumb: `${auu.resultado.thumb}`,
canal: `${auu.resultado.canal}`,
publicado: `${auu.resultado.publicado}`,
link: `${auu.resultado.link}`,
}
})
})

router.all('/youtube/playmp3-3', async (req, res) => {
q = req.query.q
if(!q)return res.json({
status:false,
motivo:'Coloque o parâmetro: q'
})
apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
auu = await Kibar(`https://api.brizaloka-api.tk/sociais/ytplaymp3?apikey=brizaloka&query=${q}`)
res.json({
status: true,
código: 999,
criador: `Gabriel e Guilherme`,
resultado: {
titulo: `${auu.titulo}`,
yt_link: `${auu.link_share}`,
thumb: `${auu.thumb}`,
canal: `${auu.canal.name}`,
visualizações: `${auu.views}`,
duração: `${auu.duration}`,
audio_src: `${auu.audio_src}`,
}
})
})
 
 app.get('/youtube/playmp4', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
PlayVideo(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `Erro no Servidor Interno`
 })})})

 app.get('/youtube/mp3', async(req, res, next) => {
 apikey = req.query.apikey;
 link = req.query.link
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: LINK"})
PlayLinkMP3(link).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `Erro no Servidor Interno`
 })})})

 app.get('/youtube/mp4', async(req, res, next) => {
 apikey = req.query.apikey;
 link = req.query.link
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: LINK"})
PlayLinkMP4(link).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `Erro no Servidor Interno`
 })})})

 app.get('/youtube/pesquisar', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
 if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
 ytSearch2(q).then(result => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: result
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/pornhubsrc', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
 if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
 pornhubsrc(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/download', async(req, res, next) => {
apikey = req.query.apikey;
url = req.query.url
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
 if (!url) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: url"})
savefrom(url).then(form => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: form
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/uptodown', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
 if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
 uptodown(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/igstalk', async(req, res, next) => {
apikey = req.query.apikey;
q = req.query.q
 if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
 if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
 igstalk(q).then(resultado => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
msg: `Erro no Servidor Interno`
})})})

app.get('/api/hackneon', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().Ephoto360("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/fpsmascote', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().Ephoto360("https://en.ephoto360.com/free-gaming-logo-maker-for-fps-game-team-546.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/equipemascote', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().Ephoto360("https://en.ephoto360.com/make-team-logo-online-free-432.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/txtquadrinhos', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().Ephoto360("https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/ffavatar', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().Ephoto360("https://en.ephoto360.com/create-free-fire-avatar-online-572.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/ffbanner', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!texto2) return res.json({msg: "Cade o parametro texto2"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().Ephoto360("https://en.ephoto360.com/make-your-own-free-fire-youtube-banner-online-free-562.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/mascotegame', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().Ephoto360("https://en.ephoto360.com/create-a-gaming-mascot-logo-free-560.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/mascoteavatar', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!texto2) return res.json({msg: "Cade o parametro texto2"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().Ephoto360("https://en.ephoto360.com/create-logo-avatar-mascot-style-364.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/wingeffect', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().Ephoto360("https://en.ephoto360.com/the-effect-of-galaxy-angel-wings-289.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/angelglx', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().Ephoto360("https://en.ephoto360.com/wings-galaxy-206.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/gizquadro', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().Ephoto360("https://en.ephoto360.com/writing-chalk-on-the-blackboard-30.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/blackpink', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().Ephoto360("https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/girlmascote', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().Ephoto360("https://en.ephoto360.com/create-cute-girl-gamer-mascot-logo-online-687.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/logogame', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().Ephoto360("https://en.ephoto360.com/create-logo-team-logo-gaming-assassin-style-574.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/romantic', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/fire', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/smoke', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/papel', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/narutologo', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/lovemsg', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/lovemsg2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/lovemsg3', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/love-text-effect-372.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/coffecup', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/coffecup2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/florwooden', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/madeira', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/gameplay', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!texto2) return res.json({msg: "Cade o parametro texto2"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/googlesg', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
texto3 = req.query.texto3;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!texto2) return res.json({msg: "Cade o parametro texto2"})
if(!texto3) return res.json({msg: "Cade o parametro texto3"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/other-design/make-google-suggestion-photos-238.html", [`${texto}`, `${texto2}`, `${texto3}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neon2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/lobometal', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/harryp', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/cup', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/txtborboleta', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/shadow', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/cemiterio', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/metalgold', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/efeitoneon', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({msg: "Cade o parametro texto"})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/transformer', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/3dstone', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/fiction', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/cattxt', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neondevil', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/demonfire', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/colaq', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/luxury', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/berry', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/matrix', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/horror', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/horror-blood-text-effect-online-883.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/nuvem', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neon3', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neve', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/xmas-cards-3d-online-942.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/areia', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/vidro', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/dropwater-text-effect-872.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/style', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/1917-style-text-effect-online-980.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/blood', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/pink', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/carbon', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/glossy-carbon-text-effect-965.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/metalblue', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/glossy-blue-metal-text-effect-967.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/jeans', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/denim-text-effect-online-919.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/jokerlogo', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-logo-joker-online-934.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/natal', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/ossos', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/skeleton-text-effect-online-929.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/asfalto', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/road-warning-text-effect-878.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/break', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/break-wall-text-effect-871.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/glitch2', async(req, res, next) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/glitch', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
apikey = req.query.apikey
if(!texto) return res.json({status:false,msg:'cade o parametro texto'})
if(!texto2) return res.json({status:false,msg:'cade o parametro texto2'})
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})


app.get('/api/lapis', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/3dgold', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/halloween', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/lava', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/lava-text-effect-online-914.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/toxic', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/toxic-text-effect-online-901.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/demongreen', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/metalfire', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/hot-metal-text-effect-843.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/thunder', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/thunderv2', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neongreen', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/green-neon-text-effect-874.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neon', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neon1', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/free-advanced-glow-text-effect-873.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/neon3d', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/rainbow', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/api/gelo', async(req, res) => {
texto = req.query.texto;
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
zrapi.textpro("https://textpro.me/ice-cold-text-effect-862.html", [`${texto}`])
.then((data) => { res.json({
status: true,
código: 200,
criador: `Gabriel e Guilherme`,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

// FIM LOGOS

app.get('/canvas/phub',(req, res) => {
(async() => {
nome = req.query.nome
msg = req.query.msg
foto = req.query.foto
if (!foto) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
if (!msg) return res.status(408).send({ status: 408, menssagem: 'Coloque a msg no parametrô'})
if (!nome) return res.status(408).send({ status: 408, menssagem: 'Coloque o nome no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
bla = { username: nome, message: msg, image:foto}
res.type('jpg')
res.send(await canvacord.Canvas.phub(bla))
})()
})

app.get('/canvas/youtube',(req, res) => {
(async() => {
nome = req.query.nome
msg = req.query.msg
foto = req.query.foto
if (!foto) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
if (!msg) return res.status(408).send({ status: 408, menssagem: 'Coloque a msg no parametrô'})
if (!nome) return res.status(408).send({ status: 408, menssagem: 'Coloque o nome no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
bla = { username: nome, content: msg, avatar: foto, dark:false }
res.type('jpg')
res.send(await canvacord.Canvas.youtube(bla))
})()
})

app.get('/canvas/lgbt',(req, res) => {
(async() => {
link = req.query.link
if (!link) return res.status(408).send({ status: 408, menssagem: 'Coloque o link no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
res.type('jpg')
res.send(await canvacord.Canvas.rainbow(link))
})()
})

router.get('/canvas/bluediscord', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://api.brizaloka-api.tk/montage/bluediscord?apikey=brizaloka&img=${link}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/blackdiscord', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://api.brizaloka-api.tk/montage/blackdiscord?apikey=brizaloka&img=${link}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/blackdiscord', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://api.brizaloka-api.tk/montage/blackdiscord?apikey=brizaloka&img=${link}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})


app.get('/canvas/hitler',(req, res) => {
(async() => {
 link = req.query.link
if (!link) return res.status(408).send({ status: 408, menssagem: 'Coloque o link no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
res.type('jpg')
res.send(await canvacord.Canvas.hitler(link))
})()
})

app.get('/canvas/kiss',(req, res) => {
(async() => {
link = req.query.link
link2 = req.query.link2
if (!link) return res.status(408).send({ status: 408, menssagem: 'Coloque a url no parametrô'})
if (!link2) return res.status(408).send({ status: 408, menssagem: 'Coloque a url2 no parametrô'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
  res.type('jpg')
  res.send(await canvacord.Canvas.kiss(link, link2))
})()
})

router.get('/canvas/comunismo', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/comunismo?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/bolsonaro', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/bolsonaro?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/affect', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/affect?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/blur', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/blur?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})


router.get('/canvas/beautiful', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/beautiful?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/circle', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/circle?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/del', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/del?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/invert', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/invert?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/facepalm', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/facepalm?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/facepalm', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/facepalm?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/jail', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/jail?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/rip', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/rip?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/trash', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/trash?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/wasted', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/wasted?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/wasted', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/wasted?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/wanted', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/wanted?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/sepia', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/sepia?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/canvas/pixelate', async (req, res, next) => {
      var apikey = req.query.apikey;
      var link = req.query.link
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!link)return res.json({status:false,motivo:'Cadê o parâmetro link?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://ayu.p7api.xyz/api/canvas/pixelate?img=${link}&apikey=saladakk`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/about',(req, res) => {
res.json({
status:true,
dono:'anonimo-bot',
msg:'Projeto em beta'
})
})

app.get('/api/antiporno',async (req,res,next) => {
url = req.query.url
if(!url)return res.json({
status:false,
motivo:'nao_tem_url'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
fetch(`https://nsfw-demo.sashido.io/api/image/classify?url=${url}`).then(e => {
res.json(e)
})
})

router.all('/api/twitter', async (req, res) => {
url = req.query.url
if(!url)return res.json({
status:false,
motivo:'Cadê o parâmetro url?'
})
apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
auu = await Kibar(`https://ayu.p7api.xyz/api/dl/twitter?link=${url}&apikey=saladakk`)
res.json({
status: true,
código: 999,
criador: `Gabriel e Guilherme`,
resultado: {
descrição: `${auu.resultado.descrição}`,
capa: `${auu.resultado.capa}`,
HD: `${auu.resultado.HD}`,
SD: `${auu.resultado.SD}`,
audio: `${auu.resultado.audio}`,
}
})
})


router.get('/api/screenshotweb', async (req, res, next) => {
url = req.query.url
if(!url)return res.json({status:false, motivo:'Cadê o parâmetro url?'})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://api.popcat.xyz/screenshot?url=${url}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla + '/tmp/asupan.jpg', data)
        res.sendFile(bla + '/tmp/asupan.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/mirella', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://apirest.gestorvip.com/api/mirella?apikey=Toms123`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/asupan.mp4', data)
        res.sendFile('/tmp/asupan.mp4')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/mirellapng', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://apirest.gestorvip.com/api/mirellapng?apikey=Toms123`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/asupan.png', data)
        res.sendFile('/tmp/asupan.png')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/cibelly', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://apirest.gestorvip.com/api/cibellymp4?apikey=Toms123`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/asupan.mp4', data)
        res.sendFile('/tmp/asupan.mp4')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/cibellypng', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://apirest.gestorvip.com/api/ayarlapng?apikey=Toms123`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/asupan.png', data)
        res.sendFile('/tmp/asupan.png')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/miakhalifa', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://apirest.gestorvip.com/api/mia2nsfw?apikey=Toms123`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/asupan.mp4', data)
        res.sendFile('/tmp/asupan.mp4')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})


router.get('/api/ayarla', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://apirest.gestorvip.com/api/ayarla?apikey=Toms123`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/asupan.mp4', data)
        res.sendFile('/tmp/asupan.mp4')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/ayarlapng', async (req, res, next) => {
var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://apirest.gestorvip.com/api/ayarlapng?apikey=Toms123`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/asupan.png', data)
        res.sendFile('/tmp/asupan.png')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/nsfw/ahegao', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const ahegao = JSON.parse(fs.readFileSync(bla + '/data/ahegao.json'));
    const randahegao = ahegao[Math.floor(Math.random() * ahegao.length)];
    data = await fetch(randahegao).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ahegao.jpeg', data)
    res.sendFile(bla + '/tmp/ahegao.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/ass', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const ass = JSON.parse(fs.readFileSync(bla + '/data/ass.json'));
    const randass = ass[Math.floor(Math.random() * ass.length)];
    data = await fetch(randass).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ass.jpeg', data)
    res.sendFile(bla + '/tmp/ass.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/bdsm', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const bdsm = JSON.parse(fs.readFileSync(bla + '/data/bdsm.json'));
    const randbdsm = bdsm[Math.floor(Math.random() * bdsm.length)];
    data = await fetch(randbdsm).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/bdsm.jpeg', data)
    res.sendFile(bla + '/tmp/bdsm.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/blowjob', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const blowjob = JSON.parse(fs.readFileSync(bla + '/data/blowjob.json'));
    const randblowjob = blowjob[Math.floor(Math.random() * blowjob.length)];
    data = await fetch(randblowjob).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/blowjob.jpeg', data)
    res.sendFile(bla + '/tmp/blowjob.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/cuckold', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const cuckold = JSON.parse(fs.readFileSync(bla + '/data/cuckold.json'));
    const randcuckold = cuckold[Math.floor(Math.random() * cuckold.length)];
    data = await fetch(randcuckold).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/cuckold.jpeg', data)
    res.sendFile(bla + '/tmp/cuckold.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/cum', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const cum = JSON.parse(fs.readFileSync(bla + '/data/cum.json'));
    const randcum = cum[Math.floor(Math.random() * cum.length)];
    data = await fetch(randcum).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/cum.jpeg', data)
    res.sendFile(bla + '/tmp/cum.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/ero', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const ero = JSON.parse(fs.readFileSync(bla + '/data/ero.json'));
    const randero = ero[Math.floor(Math.random() * ero.length)];
    data = await fetch(randero).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ero.jpeg', data)
    res.sendFile(bla + '/tmp/ero.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/femdom', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const femdom = JSON.parse(fs.readFileSync(bla + '/data/femdom.json'));
    const randfemdom = femdom[Math.floor(Math.random() * femdom.length)];
    data = await fetch(randfemdom).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/femdom.jpeg', data)
    res.sendFile(bla + '/tmp/femdom.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/foot', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const foot = JSON.parse(fs.readFileSync(bla + '/data/foot.json'));
    const randfoot = foot[Math.floor(Math.random() * foot.length)];
    data = await fetch(randfoot).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/foot.jpeg', data)
    res.sendFile(bla + '/tmp/foot.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/gangbang', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const gangbang = JSON.parse(fs.readFileSync(bla + '/data/gangbang.json'));
    const randgangbang = gangbang[Math.floor(Math.random() * gangbang.length)];
    data = await fetch(randgangbang).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/gangbang.jpg', data)
    res.sendFile(bla + '/tmp/gangbang.jpg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/glasses', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const glasses = JSON.parse(fs.readFileSync(bla + '/data/glasses.json'));
    const randglasses = glasses[Math.floor(Math.random() * glasses.length)];
    data = await fetch(randglasses).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/glasses.jpeg', data)
    res.sendFile(bla + '/tmp/glasses.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/hentai', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const hentai = JSON.parse(fs.readFileSync(bla + '/data/hentai.json'));
    const randhentai = hentai[Math.floor(Math.random() * hentai.length)];
    data = await fetch(randhentai).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/hentai.jpeg', data)
    res.sendFile(bla + '/tmp/hentai.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/gifs', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    const gifs = JSON.parse(fs.readFileSync(bla + '/data/gifs.json'));
    const randgifs = gifs[Math.floor(Math.random() * gifs.length)];
    data = await fetch(randgifs).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/gifs.jpeg', data)
    res.sendFile(bla + '/tmp/gifs.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/figu', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    const gifs = JSON.parse(fs.readFileSync(bla + '/lib/figurinhas.json'));
    const randgifs = gifs[Math.floor(Math.random() * gifs.length)];
    data = await fetch(randgifs).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/stickera.gif', data)
    res.sendFile(bla + '/tmp/stickera.gif')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/jahy', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const jahy = JSON.parse(fs.readFileSync(bla + '/data/jahy.json'));
    const randjahy = jahy[Math.floor(Math.random() * jahy.length)];
    data = await fetch(randjahy).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/jahy.jpeg', data)
    res.sendFile(bla + '/tmp/jahy.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/manga', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const manga = JSON.parse(fs.readFileSync(bla + '/data/manga.json'));
    const randmanga = manga[Math.floor(Math.random() * manga.length)];
    data = await fetch(randmanga).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/manga.jpeg', data)
    res.sendFile(bla + '/tmp/manga.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/masturbation', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const masturbation = JSON.parse(fs.readFileSync(bla + '/data/masturbation.json'));
    const randmasturbation = masturbation[Math.floor(Math.random() * masturbation.length)];
    data = await fetch(randmasturbation).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/masturbation.jpeg', data)
    res.sendFile(bla + '/tmp/masturbation.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/neko', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const neko = JSON.parse(fs.readFileSync(bla + '/data/neko.json'));
    const randneko = neko[Math.floor(Math.random() * neko.length)];
    data = await fetch(randneko).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/neko.jpeg', data)
    res.sendFile(bla + '/tmp/neko.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/orgy', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const orgy = JSON.parse(fs.readFileSync(bla + '/data/orgy.json'));
    const randorgy = orgy[Math.floor(Math.random() * orgy.length)];
    data = await fetch(randorgy).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/orgy.jpeg', data)
    res.sendFile(bla + '/tmp/orgy.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/panties', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const panties = JSON.parse(fs.readFileSync(bla + '/data/panties.json'));
    const randpanties = panties[Math.floor(Math.random() * panties.length)];
    data = await fetch(randpanties).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/panties.jpeg', data)
    res.sendFile(bla + '/tmp/panties.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/pussy', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const pussy = JSON.parse(fs.readFileSync(bla + '/data/pussy.json'));
    const randpussy = pussy[Math.floor(Math.random() * pussy.length)];
    data = await fetch(randpussy).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/pussy.jpeg', data)
    res.sendFile(bla + '/tmp/pussy.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/neko2', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const neko2 = JSON.parse(fs.readFileSync(bla + '/data/neko2.json'));
    const randneko2 = neko2[Math.floor(Math.random() * neko2.length)];
    data = await fetch(randneko2).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/neko2.jpeg', data)
    res.sendFile(bla + '/tmp/neko2.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/tentacles', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const tentacles = JSON.parse(fs.readFileSync(bla + '/data/tentacles.json'));
    const randtentacles = tentacles[Math.floor(Math.random() * tentacles.length)];
    data = await fetch(randtentacles).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/tentacles.jpeg', data)
    res.sendFile(bla + '/tmp/tentacles.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/thighs', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const thighs = JSON.parse(fs.readFileSync(bla + '/data/thighs.json'));
    const randthighs = thighs[Math.floor(Math.random() * thighs.length)];
    data = await fetch(randthighs).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/thighs.jpeg', data)
    res.sendFile(bla + '/tmp/thighs.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/yuri', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const yuri = JSON.parse(fs.readFileSync(bla + '/data/yuri.json'));
    const randyuri = yuri[Math.floor(Math.random() * yuri.length)];
    data = await fetch(randyuri).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/yuri.jpeg', data)
    res.sendFile(bla + '/tmp/yuri.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/zettai', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const zettai = JSON.parse(fs.readFileSync(bla + '/data/zettai.json'));
    const randzettai = zettai[Math.floor(Math.random() * zettai.length)];
    data = await fetch(randzettai).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/zettai.jpeg', data)
    res.sendFile(bla + '/tmp/zettai.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/keneki', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const keneki = JSON.parse(fs.readFileSync(bla + '/data/keneki.json'));
    const randkeneki = keneki[Math.floor(Math.random() * keneki.length)];
    data = await fetch(randkeneki).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/keneki.jpeg', data)
    res.sendFile(bla + '/tmp/keneki.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/megumin', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const megumin = JSON.parse(fs.readFileSync(bla + '/data/megumin.json'));
    const randmegumin = megumin[Math.floor(Math.random() * megumin.length)];
    data = await fetch(randmegumin).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/megumin.jpeg', data)
    res.sendFile(bla + '/tmp/megumin.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/yotsuba', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const yotsuba = JSON.parse(fs.readFileSync(bla + '/data/yotsuba.json'));
    const randyotsuba = yotsuba[Math.floor(Math.random() * yotsuba.length)];
    data = await fetch(randyotsuba).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/yotsuba.jpeg', data)
    res.sendFile(bla + '/tmp/yotsuba.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/shinomiya', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const shinomiya = JSON.parse(fs.readFileSync(bla + '/data/shinomiya.json'));
    const randshinomiya = shinomiya[Math.floor(Math.random() * shinomiya.length)];
    data = await fetch(randshinomiya).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/shinomiya.jpeg', data)
    res.sendFile(bla + '/tmp/shinomiya.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/yumeko', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const yumeko = JSON.parse(fs.readFileSync(bla + '/data/yumeko.json'));
    const randyumeko = yumeko[Math.floor(Math.random() * yumeko.length)];
    data = await fetch(randyumeko).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/yumeko.jpeg', data)
    res.sendFile(bla + '/tmp/yumeko.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/tejina', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const tejina = JSON.parse(fs.readFileSync(bla + '/data/tejina.json'));
    const randtejina = tejina[Math.floor(Math.random() * tejina.length)];
    data = await fetch(randtejina).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/tejina.jpeg', data)
    res.sendFile(bla + '/tmp/tejina.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/chiho', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const chiho = JSON.parse(fs.readFileSync(bla + '/data/chiho.json'));
    const randchiho = chiho[Math.floor(Math.random() * chiho.length)];
    data = await fetch(randchiho).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/chiho.jpeg', data)
    res.sendFile(bla + '/tmp/chiho.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/cyberspace', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const cyberspace = JSON.parse(fs.readFileSync(bla + '/data/CyberSpace.json'));
    const randcyberspace = cyberspace[Math.floor(Math.random() * cyberspace.length)];
    data = await fetch(randcyberspace).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/cyberspace.jpeg', data)
    res.sendFile(bla + '/tmp/cyberspace.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/gaming', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const gaming = JSON.parse(fs.readFileSync(bla + '/data/GameWallp.json'));
    const randgaming = gaming[Math.floor(Math.random() * gaming.length)];
    data = await fetch(randgaming).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/gaming.jpeg', data)
    res.sendFile(bla + '/tmp/gaming.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/programing', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const programing = JSON.parse(fs.readFileSync(bla + '/data/Programming.json'));
    const randprograming = programing[Math.floor(Math.random() * programing.length)];
    data = await fetch(randprograming).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/programing.jpeg', data)
    res.sendFile(bla + '/tmp/programing.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/wallpapertec', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const teknologi = JSON.parse(fs.readFileSync(bla + '/data/Technology.json'));
    const randteknologi = teknologi[Math.floor(Math.random() * teknologi.length)];
    data = await fetch(randteknologi).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/teknologi.jpeg', data)
    res.sendFile(bla + '/tmp/teknologi.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/mountain', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const mountain = JSON.parse(fs.readFileSync(bla + '/data/Mountain.json'));
    const randmountain = mountain[Math.floor(Math.random() * mountain.length)];
    data = await fetch(randmountain).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/mountain.jpeg', data)
    res.sendFile(bla + '/tmp/mountain.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})



router.get('/random/toukachan', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const toukachan = JSON.parse(fs.readFileSync(bla + '/data/toukachan.json'));
    const randtoukachan = toukachan[Math.floor(Math.random() * toukachan.length)];
    data = await fetch(randtoukachan).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/toukachan.jpeg', data)
    res.sendFile(bla + '/tmp/toukachan.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/akira', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const akira = JSON.parse(fs.readFileSync(bla + '/data/akira.json'));
    const randakira = akira[Math.floor(Math.random() * akira.length)];
    data = await fetch(randakira).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/akira.jpeg', data)
    res.sendFile(bla + '/tmp/akira.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/itori', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const itori = JSON.parse(fs.readFileSync(bla + '/data/itori.json'));
    const randitori = itori[Math.floor(Math.random() * itori.length)];
    data = await fetch(randitori).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/itori.jpeg', data)
    res.sendFile(bla + '/tmp/itori.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/kurumi', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const kurumi = JSON.parse(fs.readFileSync(bla + '/data/kurumi.json'));
    const randkurumi = kurumi[Math.floor(Math.random() * kurumi.length)];
    data = await fetch(randkurumi).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/kurumi.jpeg', data)
    res.sendFile(bla + '/tmp/kurumi.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/miku', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const miku = JSON.parse(fs.readFileSync(bla + '/data/miku.json'));
    const randmiku = miku[Math.floor(Math.random() * miku.length)];
    data = await fetch(randmiku).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/miku.jpeg', data)
    res.sendFile(bla + '/tmp/miku.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/pokemon', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const pokemon = JSON.parse(fs.readFileSync(bla + '/data/pokemon.json'));
    const randpokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
    data = await fetch(randpokemon).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/pokemon.jpeg', data)
    res.sendFile(bla + '/tmp/pokemon.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/ryujin', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const ryujin = JSON.parse(fs.readFileSync(bla + '/data/ryujin.json'));
    const randryujin = ryujin[Math.floor(Math.random() * ryujin.length)];
    data = await fetch(randryujin).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ryujin.jpeg', data)
    res.sendFile(bla + '/tmp/ryujin.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/rose', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const rose = JSON.parse(fs.readFileSync(bla + '/data/rose.json'));
    const randrose = rose[Math.floor(Math.random() * rose.length)];
    data = await fetch(randrose).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/rose.jpeg', data)
    res.sendFile(bla + '/tmp/rose.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/kaori', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const kaori = JSON.parse(fs.readFileSync(bla + '/data/kaori.json'));
    const randkaori = kaori[Math.floor(Math.random() * kaori.length)];
    data = await fetch(randkaori).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/kaori.jpeg', data)
    res.sendFile(bla + '/tmp/kaori.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/shizuka', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const shizuka = JSON.parse(fs.readFileSync(bla + '/data/shizuka.json'));
    const randshizuka = shizuka[Math.floor(Math.random() * shizuka.length)];
    data = await fetch(randshizuka).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/shizuka.jpeg', data)
    res.sendFile(bla + '/tmp/shizuka.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/kaga', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const kaga = JSON.parse(fs.readFileSync(bla + '/data/kaga.json'));
    const randkaga = kaga[Math.floor(Math.random() * kaga.length)];
    data = await fetch(randkaga).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/kaga.jpeg', data)
    res.sendFile(bla + '/tmp/kaga.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/kotori', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const kotori = JSON.parse(fs.readFileSync(bla + '/data/kotori.json'));
    const randkotori = kotori[Math.floor(Math.random() * kotori.length)];
    data = await fetch(randkotori).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/kotori.jpeg', data)
    res.sendFile(bla + '/tmp/kotori.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/mikasa', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const mikasa = JSON.parse(fs.readFileSync(bla + '/data/mikasa.json'));
    const randmikasa = mikasa[Math.floor(Math.random() * mikasa.length)];
    data = await fetch(randmikasa).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/mikasa.jpeg', data)
    res.sendFile(bla + '/tmp/mikasa.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/akiyama', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const akiyama = JSON.parse(fs.readFileSync(bla + '/data/akiyama.json'));
    const randakiyama = akiyama[Math.floor(Math.random() * akiyama.length)];
    data = await fetch(randakiyama).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/akiyama.jpeg', data)
    res.sendFile(bla + '/tmp/akiyama.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/gremory', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const gremory = JSON.parse(fs.readFileSync(bla + '/data/gremory.json'));
    const randgremory = gremory[Math.floor(Math.random() * gremory.length)];
    data = await fetch(randgremory).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/gremory.jpeg', data)
    res.sendFile(bla + '/tmp/gremory.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/isuzu', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const isuzu = JSON.parse(fs.readFileSync(bla + '/data/isuzu.json'));
    const randisuzu = isuzu[Math.floor(Math.random() * isuzu.length)];
    data = await fetch(randisuzu).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/isuzu.jpeg', data)
    res.sendFile(bla + '/tmp/isuzu.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/cosplay', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const cosplay = JSON.parse(fs.readFileSync(bla + '/data/cosplay.json'));
    const randcosplay = cosplay[Math.floor(Math.random() * cosplay.length)];
    data = await fetch(randcosplay).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/cosplay.jpeg', data)
    res.sendFile(bla + '/tmp/cosplay.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/shina', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const shina = JSON.parse(fs.readFileSync(bla + '/data/shina.json'));
    const randshina = shina[Math.floor(Math.random() * shina.length)];
    data = await fetch(randshina).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/shina.jpeg', data)
    res.sendFile(bla + '/tmp/shina.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/kagura', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const kagura = JSON.parse(fs.readFileSync(bla + '/data/kagura.json'));
    const randkagura = kagura[Math.floor(Math.random() * kagura.length)];
    data = await fetch(randkagura).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/kagura.jpeg', data)
    res.sendFile(bla + '/tmp/kagura.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/shinka', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const shinka = JSON.parse(fs.readFileSync(bla + '/data/shinka.json'));
    const randshinka = shinka[Math.floor(Math.random() * shinka.length)];
    data = await fetch(randshinka).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/shinka.jpeg', data)
    res.sendFile(bla + '/tmp/shinka.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/eba', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const eba = JSON.parse(fs.readFileSync(bla + '/data/eba.json'));
    const randeba = eba[Math.floor(Math.random() * eba.length)];
    data = await fetch(randeba).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/eba.jpeg', data)
    res.sendFile(bla + '/tmp/eba.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/deidara', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Deidara = JSON.parse(fs.readFileSync(bla + '/data/deidara.json'));
    const randDeidara = Deidara[Math.floor(Math.random() * Deidara.length)];
    data = await fetch(randDeidara).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/deidara.jpeg', data)
    res.sendFile(bla + '/tmp/deidara.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})



router.get('/random/jeni', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const jeni = JSON.parse(fs.readFileSync(bla + '/data/jeni.json'));
    const randjeni = jeni[Math.floor(Math.random() * jeni.length)];
    data = await fetch(randjeni).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/jeni.jpeg', data)
    res.sendFile(bla + '/tmp/jeni.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/random/meme', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const meme = JSON.parse(fs.readFileSync(bla + '/data/meme.json'));
    const randmeme = meme[Math.floor(Math.random() * meme.length)];
    data = await fetch(randmeme).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/meme.jpeg', data)
    res.sendFile(bla + '/tmp/meme.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/satanic', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const satanic = JSON.parse(fs.readFileSync(bla + '/data/satanic.json'));
    const randsatanic = satanic[Math.floor(Math.random() * satanic.length)];
    data = await fetch(randsatanic).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/satanic.jpeg', data)
    res.sendFile(bla + '/tmp/satanic.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})



router.get('/random/itachi', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Itachi = JSON.parse(fs.readFileSync(bla + '/data/itachi.json'));
    const randItachi = Itachi[Math.floor(Math.random() * Itachi.length)];
    data = await fetch(randItachi).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ita.jpeg', data)
    res.sendFile(bla + '/tmp/ita.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/madara', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Madara = JSON.parse(fs.readFileSync(bla + '/data/madara.json'));
    const randMadara = Madara[Math.floor(Math.random() * Madara.length)];
    data = await fetch(randMadara).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/madara.jpeg', data)
    res.sendFile(bla + '/tmp/madara.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/yuki', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Yuki = JSON.parse(fs.readFileSync(bla + '/data/yuki.json'));
    const randYuki = Yuki[Math.floor(Math.random() * Yuki.length)];
    data = await fetch(randYuki).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/yuki.jpeg', data)
    res.sendFile(bla + '/tmp/yuki.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/asuna', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const asuna = JSON.parse(fs.readFileSync(bla + '/data/asuna.json'));
    const randasuna = asuna[Math.floor(Math.random() * asuna.length)];
    data = await fetch(randasuna).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/asuna.jpeg', data)
    res.sendFile(bla + '/tmp/asuna.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/ayuzawa', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const ayuzawa = JSON.parse(fs.readFileSync(bla + '/data/ayuzawa.json'));
    const randayuzawa = ayuzawa[Math.floor(Math.random() * ayuzawa.length)];
    data = await fetch(randayuzawa).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ayuzawa.jpeg', data)
    res.sendFile(bla + '/tmp/ayuzawa.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/chitoge', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const chitoge = JSON.parse(fs.readFileSync(bla + '/data/chitoge.json'));
    const randchitoge = chitoge[Math.floor(Math.random() * chitoge.length)];
    data = await fetch(randchitoge).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/chitoge.jpeg', data)
    res.sendFile(bla + '/tmp/chitoge.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/emilia', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const emilia = JSON.parse(fs.readFileSync(bla + '/data/emilia.json'));
    const randemilia = emilia[Math.floor(Math.random() * emilia.length)];
    data = await fetch(randemilia).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/emilia.jpeg', data)
    res.sendFile(bla + '/tmp/emilia.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/hestia', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const hestia = JSON.parse(fs.readFileSync(bla + '/data/hestia.json'));
    const randhestia = hestia[Math.floor(Math.random() * hestia.length)];
    data = await fetch(randhestia).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/hestia.jpeg', data)
    res.sendFile(bla + '/tmp/hestia.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/inori', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const inori = JSON.parse(fs.readFileSync(bla + '/data/inori.json'));
    const randinori = inori[Math.floor(Math.random() * inori.length)];
    data = await fetch(randinori).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/inori.jpeg', data)
    res.sendFile(bla + '/tmp/inori.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/ana', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const ana = JSON.parse(fs.readFileSync(bla + '/data/ana.json'));
    const randana = ana[Math.floor(Math.random() * ana.length)];
    data = await fetch(randana).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ana.jpeg', data)
    res.sendFile(bla + '/tmp/ana.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/boruto', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Boruto = JSON.parse(fs.readFileSync(bla + '/data/boruto.json'));
    const randBoruto = Boruto[Math.floor(Math.random() * Boruto.length)];
    data = await fetch(randBoruto).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/bor.jpeg', data)
    res.sendFile(bla + '/tmp/bor.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/erza', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Erza = JSON.parse(fs.readFileSync(bla + '/data/erza.json'));
    const randErza = Erza[Math.floor(Math.random() * Erza.length)];
    data = await fetch(randErza).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/erza.jpeg', data)
    res.sendFile(bla + '/tmp/erza.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/kakashi', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Kakasih = JSON.parse(fs.readFileSync(bla + '/data/kakasih.json'));
    const randKakasih = Kakasih[Math.floor(Math.random() * Kakasih.length)];
    data = await fetch(randKakasih).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ka.jpeg', data)
    res.sendFile(bla + '/tmp/ka.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/sagiri', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Sagiri = JSON.parse(fs.readFileSync(bla + '/data/sagiri.json'));
    const randSagiri = Sagiri[Math.floor(Math.random() * Sagiri.length)];
    data = await fetch(randSagiri).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/sagiri.jpeg', data)
    res.sendFile(bla + '/tmp/sagiri.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/minato', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Minato = JSON.parse(fs.readFileSync(bla + '/data/minato.json'));
    const randMinato = Minato[Math.floor(Math.random() * Minato.length)];
    data = await fetch(randMinato).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/minato.jpeg', data)
    res.sendFile(bla + '/tmp/minato.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/naruto', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Naruto = JSON.parse(fs.readFileSync(bla + '/data/naruto.json'));
    const randNaruto = Naruto[Math.floor(Math.random() * Naruto.length)];
    data = await fetch(randNaruto).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/naruto.jpeg', data)
    res.sendFile(bla + '/tmp/naruto.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/nezuko', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Nezuko = JSON.parse(fs.readFileSync(bla + '/data/nezuko.json'));
    const randNezuko = Nezuko[Math.floor(Math.random() * Nezuko.length)];
    data = await fetch(randNezuko).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/nezu.jpeg', data)
    res.sendFile(bla + '/tmp/nezu.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/onepiece', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Pic = JSON.parse(fs.readFileSync(bla + '/data/onepiece.json'));
    const randPic = Pic[Math.floor(Math.random() * Pic.length)];
    data = await fetch(randPic).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/pic.jpeg', data)
    res.sendFile(bla + '/tmp/pic.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/rize', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Rize = JSON.parse(fs.readFileSync(bla + '/data/rize.json'));
    const randRize = Rize[Math.floor(Math.random() * Rize.length)];
    data = await fetch(randRize).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/rize.jpeg', data)
    res.sendFile(bla + '/tmp/rize.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/sakura', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Sakura = JSON.parse(fs.readFileSync(bla + '/data/sakura.json'));
    const randSakura = Sakura[Math.floor(Math.random() * Sakura.length)];
    data = await fetch(randSakura).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/sakura.jpeg', data)
    res.sendFile(bla + '/tmp/sakura.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/sasuke', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Sasuke = JSON.parse(fs.readFileSync(bla + '/data/sasuke.json'));
    const randSasuke = Sasuke[Math.floor(Math.random() * Sasuke.length)];
    data = await fetch(randSasuke).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/sasuke.jpeg', data)
    res.sendFile(bla + '/tmp/sasuke.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/tsunade', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Su = JSON.parse(fs.readFileSync(bla + '/data/tsunade.json'));
    const randSu = Su[Math.floor(Math.random() * Su.length)];
    data = await fetch(randSu).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/su.jpeg', data)
    res.sendFile(bla + '/tmp/su.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/montor', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Mon = JSON.parse(fs.readFileSync(bla + '/data/montor.json'));
    const randMon = Mon[Math.floor(Math.random() * Mon.length)];
    data = await fetch(randMon).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/montor.jpeg', data)
    res.sendFile(bla + '/tmp/montor.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/mobil', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Mob = JSON.parse(fs.readFileSync(bla + '/data/mobil.json'));
    const randMob = Mob[Math.floor(Math.random() * Mob.length)];
    data = await fetch(randMob).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/mobil.jpeg', data)
    res.sendFile(bla + '/tmp/mobil.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/random/anime', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Wai23 = JSON.parse(fs.readFileSync(bla + '/data/wallhp2.json'));
    const randWai23 = Wai23[Math.floor(Math.random() * Wai23.length)];
    data = await fetch(randWai23).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/wallhp2.jpeg', data)
    res.sendFile(bla + '/tmp/wallhp2.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/random/wallhp', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Wai22 = JSON.parse(fs.readFileSync(bla + '/data/wallhp.json'));
    const randWai22 = Wai22[Math.floor(Math.random() * Wai22.length)];
    data = await fetch(randWai22).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/wallhp.jpeg', data)
    res.sendFile(bla + '/tmp/wallhp.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/waifu2', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Wai2 = JSON.parse(fs.readFileSync(bla + '/data/waifu2.json'));
    const randWai2 = Wai2[Math.floor(Math.random() * Wai2.length)];
    data = await fetch(randWai2).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/wibu2.jpeg', data)
    res.sendFile(bla + '/tmp/wibu2.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/waifu', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Wai = JSON.parse(fs.readFileSync(bla + '/data/waifu.json'));
    const randWai = Wai[Math.floor(Math.random() * Wai.length)];
    data = await fetch(randWai).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/wibu.jpeg', data)
    res.sendFile(bla + '/tmp/wibu.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/random/hekel', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    Hekel = JSON.parse(fs.readFileSync(bla + '/data/hekel.json'));
    const randHekel = Hekel[Math.floor(Math.random() * Hekel.length)]
    data = await fetch(randHekel).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/hek.jpeg', data)
    res.sendFile(bla + '/tmp/hek.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/kucing', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    Kucing = JSON.parse(fs.readFileSync(bla + '/data/kucing.json'));
    const randKucing = Kucing[Math.floor(Math.random() * Kucing.length)]
    data = await fetch(randKucing).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/kucing.jpeg', data)
    res.sendFile(bla + '/tmp/kucing.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/pubg', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    Pubg = JSON.parse(fs.readFileSync(bla + '/data/pubg.json'));
    const randPubg = Pubg[Math.floor(Math.random() * Pubg.length)]
    data = await fetch(randPubg).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/pubg.jpeg', data)
    res.sendFile(bla + '/tmp/pubg.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/ppcouple', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    Pp = JSON.parse(fs.readFileSync(bla + '/data/profil.json'));
    const randPp = Pp[Math.floor(Math.random() * Pp.length)]
    data = await fetch(randPp).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/pp.jpeg', data)
    res.sendFile(bla + '/tmp/pp.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/anjing', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    Anjing = JSON.parse(fs.readFileSync(bla + '/data/anjing.json'));
    const randAnjing = Anjing[Math.floor(Math.random() * Anjing.length)]
    data = await fetch(randAnjing).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/ajg.jpeg', data)
    res.sendFile(bla + '/tmp/ajg.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/doraemon', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    Dora = JSON.parse(fs.readFileSync(bla + '/data/doraemon.json'));
    const randDora = Dora[Math.floor(Math.random() * Dora.length)]
    data = await fetch(randDora).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/dora.jpeg', data)
    res.sendFile(bla + '/tmp/dora.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/random/elaina', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    const Elaina = JSON.parse(fs.readFileSync(bla + '/data/elaina.json'))
    const randElaina = Elaina[Math.floor(Math.random() * Elaina.length)]
    //tansole.log(randLoli)
    data = await fetch(randElaina).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/elaina.jpeg', data)
    res.sendFile(bla + '/tmp/elaina.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/random/loli', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    const Loli = JSON.parse(fs.readFileSync(bla + '/data/loli.json'))
    const randLoli = Loli[Math.floor(Math.random() * Loli.length)]
    //tansole.log(randLoli)
    data = await fetch(randLoli).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/loli.jpeg', data)
    res.sendFile(bla + '/tmp/loli.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/random/yuri', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    const Yuri = JSON.parse(fs.readFileSync(bla + '/data/yuri.json'))
    const randYuri = Yuri[Math.floor(Math.random() * Yuri.length)]
    //tansole.log(randTech)
    data = await fetch(randYuri).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/Yuri.jpeg', data)
    res.sendFile(bla + '/tmp/Yuri.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/random/cecan', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const cecan = JSON.parse(fs.readFileSync(bla + '/data/cecan.json'));
    const randCecan = cecan[Math.floor(Math.random() * cecan.length)];
    data = await fetch(randCecan).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/cecan.jpeg', data)
    res.sendFile(bla + '/tmp/cecan.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/wallpaper/aesthetic', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Aesthetic = JSON.parse(fs.readFileSync(bla + '/data/aesthetic.json'));
    const randAesthetic = Aesthetic[Math.floor(Math.random() * Aesthetic.length)];
    data = await fetch(randAesthetic).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/aesthetic.jpeg', data)
    res.sendFile(bla + '/tmp/aesthetic.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})



router.get('/random/sagiri', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Sagiri = JSON.parse(fs.readFileSync(bla + '/data/sagiri.json'));
    const randSagiri = Sagiri[Math.floor(Math.random() * Sagiri.length)];
    data = await fetch(randSagiri).then(v => v.buffer())
    await fs.writeFileSync(bla + '/tmp/sagiri.jpeg', data)
    res.sendFile(bla + '/tmp/sagiri.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/shota', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const Shota = JSON.parse(fs.readFileSync(bla + '/data/shota.json'));
    const randShota = Shota[Math.floor(Math.random() * Shota.length)];
    data = await fetch(randShota).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/shota.jpeg', data)
    res.sendFile(bla + '/tmp/shota.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/nsfwloli', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    

    const lol = JSON.parse(fs.readFileSync(bla + '/data/nsfwloli.json'));
    const randlol = lol[Math.floor(Math.random() * lol.length)];
    data = await fetch(randlol).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/lol.jpeg', data)
    res.sendFile(bla + '/tmp/lol.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/hinata', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    const Hinata = JSON.parse(fs.readFileSync(bla + '/data/hinata.json'));
    const randHin = Hinata[Math.floor(Math.random() * Hinata.length)];
    data = await fetch(randHin).then(v => v.buffer());
    await fs.writeFileSync(bla + '/tmp/Hinata.jpeg', data)
    res.sendFile(bla + '/tmp/Hinata.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/random/wallpaperanime', async (req, res, next) => {
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://api.brizaloka-api.tk/random/wallpaper?apikey=brizaloka`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/attp', async (req, res, next) => {
      var texto = req.query.texto
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
      if(!texto)return res.json({status:false, motivo:'Cadê o parâmetro texto?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://api.brizaloka-api.tk/ttp/attp1?apikey=brizaloka&text=${texto}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/attp2', async (req, res, next) => {
      var texto = req.query.texto
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'Cadê o parâmetro apikey?'})
      if(!texto)return res.json({status:false, motivo:'Cadê o parâmetro texto?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://api.brizaloka-api.tk/ttp/attp2?apikey=brizaloka&text=${texto}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/attp3', async (req, res, next) => {
      var texto = req.query.texto
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
      if(!texto)return res.json({status:false, motivo:'Cadê o parâmetro texto?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://api.brizaloka-api.tk/ttp/attp3?apikey=brizaloka&text=${texto}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/attp4', async (req, res, next) => {
      var texto = req.query.texto
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
      if(!texto)return res.json({status:false, motivo:'Cadê o parâmetro texto?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://api.brizaloka-api.tk/ttp/attp4?apikey=brizaloka&text=${texto}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/attp5', async (req, res, next) => {
      var texto = req.query.texto
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
      if(!texto)return res.json({status:false, motivo:'Cadê o parâmetro texto?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://api.brizaloka-api.tk/ttp/attp5?apikey=brizaloka&text=${texto}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/api/attp6', async (req, res, next) => {
      var texto = req.query.texto
      var apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
      if(!texto)return res.json({status:false, motivo:'Cadê o parâmetro texto?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
	if(key.includes(apikey)){    
    hasil = `https://api.brizaloka-api.tk/ttp/attp6?apikey=brizaloka&text=${texto}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync('/tmp/gostosinha.jpg', data)
        res.sendFile('/tmp/gostosinha.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

 app.get('/api/soundcloud', async(req, res, next) => {
 apikey = req.query.apikey;
 url = req.query.url
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!url) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: url"})
soundl(url).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `Erro no Servidor Interno`
 })})})

 app.get('/api/manga', async(req, res, next) => {
 apikey = req.query.apikey;
q = req.query.q
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
manga(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `Erro no Servidor Interno`
 })})})

 app.get('/api/hentaistube', async(req, res, next) => {
 apikey = req.query.apikey;
q = req.query.q
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
hentaistube(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `Erro no Servidor Interno`
 })})})
 
 app.get('/api/animes', async(req, res, next) => {
 apikey = req.query.apikey;
q = req.query.q
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
if (!q) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o parametro: q"})
anime(q).then((resultado) => {
 res.json({
 status: true,
 código: 200,
 criador: `${criador}`,
 resultado: resultado
 })}).catch(e => {
res.json({
 msg: `Erro no Servidor Interno`
 })})})
 
router.all('/api/audiomeme', async (req, res) => {
text = req.query.text;
if(!text)return res.json({status:false, motivo:'Cadê o parâmetro text?'})
apikey = req.query.apikey;
if(!apikey)return res.json({status:false,msg:'- Cadê o parâmetro apikey?'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
auu = await Kibar(`https://ayanami-prem.herokuapp.com/api/download/audios?text=${text}&apikey=apikeyFree30days`)
res.json({
status: true,
código: 999,
criador: `Gabriel e Guilherme`,
resultado: {
audio: `${auu.result.audio}`,
}
})
})

app.get('/api/ttp',  async (req, res) => {
texto = req.query.texto
if(!texto)return res.json({
status:false,
msg:'Cade o parametro texto??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
cor = ["f702ff","ff0202","00ff2e","efff00","00ecff","3100ff","ffb400","ff00b0","00ff95","efff00"] //CORES COLOQUE QUALQUER UMA MAS EM CODE
fonte = ["Days%20One","Domine","Exo","Fredoka%20One","Gentium%20Basic","Gloria%20Hallelujah","Great%20Vibes","Orbitron","PT%20Serif","Pacifico"]//FONTS NÃO MEXA
cores = cor[Math.floor(Math.random() * (cor.length))]	 				 
fontes = fonte[Math.floor(Math.random() * (fonte.length))]	 		
sitee = `https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${texto}&text.0.outline.color=000000&text.0.outline.blur=0&text.0.outline.opacity=55&text.0.color=${cores}&text.0.font.family=${fontes}&text.0.background.color=ff0000`
res.type('jpg')
res.send(await getBuffer(sitee))
})

app.get('/api/fbdown',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
down.fbdown(url)
.then(e => {
res.json({
status:true,
criador: '@Vitinho ',
resultado: e})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/photooxy',(req,res) => {
url = req.query.url
text = req.query.text
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
if(!text)return res.json({
status:false,
msg:'Cade o parametro text??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
photooxy(url, text)
.then(e => {
res.json({
status:true,
criador: '@Vitinho ',
resultado: e})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/wallpaperanime',(req,res) => {
apikey = req.query.apikey
q = 'Wallpaper anime'
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
gimage(q, async (error, results) => {
if (error) {
console.log(error)
res.json({
status:false,
msg:'Não encontrei imagem'
})
} else {
bala = await getBuffer(results[1].url)
res.type('jpg')
res.send(bala)
}
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/ssweb',async (req,res,next) => {
url = req.query.url
if(!url)return res.json({
status:false,
motivo:'nao_tem_url'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
fetch('https://mnazria.herokuapp.com/api/screenshotweb?url='+url, async(error, results) => {
if(error){
console.log(error)
res.json({
status:false,
msg:'Não encontrei o site'
})
} else { 
resultado = results
bala = await getBuffer(resultado.gambar)
res.type('jpg')
res.send(bala)
}
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/avatar',(req,res,next) => {
fetch(encodeURI(`https://nekos.life/api/v2/img/avatar`))
.then(response => response.json())
.then(async (data) => {
resultado =  data
bala = await getBuffer(resultado.url)
res.type('jpg')
res.send(bala)
})
.catch(e => {
res.json({erro:'erro'})
})
})

app.get('/api/legenda',async (req,res,next) => {
url = req.query.url
texto1 = req.query.texto1
texto2 = req.query.texto2
if(!url)return res.json({
status:false,
motivo:'nao_tem_url'
})
if(!texto1)return res.json({
status:false,
motivo:'nao_tem_texto_1'
})
if(!texto2)return res.json({
status:false,
motivo:'nao_tem_texto_2'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
bala = await getBuffer(`https://api.memegen.link/images/custom/${texto1}/${texto2}.png?background=${url}`)
res.type('jpg')
res.send(bala)
})

app.get('/api/github',(req,res,next) => {
pessoa = req.query.usuario
if(!pessoa)return res.json({
status:false,
motivo:'cade_o_usuario'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
fetch(encodeURI(`https://api.github.com/users/`+pessoa))
.then(response => response.json())
.then(date => {
gitData =  date;
res.json({
criador:"Vitinho ツ",
status:true,
resultado:{
username: gitData.login,
id: gitData.id,
Node_ID: gitData.node_id,
url: gitData.html_url,
local: (gitData.location == null) ? 'não_tem' : gitData.location,
bio: (gitData.bio == null) ? 'não_tem' : gitData.bio,
twitter:  (gitData.twitter_username == null) ? 'não_tem' : gitData.twitter_username,
seguidores: gitData.followers,
seguindo: gitData.following,
criado: gitData.created_at,
atualizado: gitData.updated_at,
procura_trabalho: (gitData.hireable == null) ? 'Não' : gitData.hireable,
Site: (gitData.blog == "") ? 'Não' : gitData.blog,
repositorios: gitData.public_repos,
admin_de_Site: (gitData.site_admin == false) ? 'Não' : gitData.site_admin,
tipo: gitData.type,
empresa: (gitData.company == null) ? 'Não' : gitData.company,
email: (gitData.email == null) ? 'Não' : gitData.email
} 
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/wiki',(req,res) => {
texto = req.query.texto
if(!texto)return res.json({
status:false,
msg:'Cade o parametro texto??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
wiki.search(`${texto}`, 'pt')
.then(async (wikip) => {
const wikis = await axiosapp.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip[0].pageid}`)
const getData = Object.keys(wikis.data.query.pages)

res.json({
status:true,
criador:'anonimo-bot',
resultado:wikis.data.query.pages[getData].extract
    })
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


//////YTS

app.get('/api/play', async (req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
ytPlay(q)
.then(e => {
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/youtubedl', async (req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
xfar.Youtube(url)
.then(e => {
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/playv1', async (req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
ytPlay_2(q)
.then(e => {
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/playv2', async (req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
ytPlay_3(q).then(res => {
res.send(res)
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/playmp4',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
ytPlayMp4(q)
.then(e => {
res.json({
status:true,
criador:'@anonimo-bot',
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/playmp4-2',(req,res) => {
link = req.query.link
if(!link)return res.json({
status:false,
msg:'Cade o parametro link??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
hx.youtube(link)
.then(e => {
res.json({
status:true,
criador:'@anonimo-bot',
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/ytsrc',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
msg:'Cade o parametro q??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
ytSearch(q)
.then(e => {
res.json({
status:true,
criador:'@anonimo-bot',
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/ytMp4',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
ytMp4(url)
.then(e => {
res.json({
status:true,
criador:'@anonimo-bot',
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


app.get('/api/ytMp3',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
ytMp3(url)
.then(e => {
res.json({
status:true,
criador:'anonimo-bot',
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/ytmp3-ofc',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
yta(url, "128kbps")
.then(e => {
res.json({
status:true,
criador:'anonimo-bot',
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/ytmp4-ofc',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
ytv(url, "360p")
.then(e => {
res.json({
status:true,
criador:'anonimo-bot',
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/ytMp3_3', async (req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
await new Youtube().ytmp3(url, true)
.then(e => {
res.json({
status:true,
criador:'anonimo-bot',
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/api/ytMp3_2',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
msg:'Cade o parametro url??'
})
apikey = req.query.apikey
if(!apikey)return res.json({status:false,msg:'cade o parametro apikey'})
if(!key.includes(apikey))return res.json({status:false,msg:'Apikey Inválida, entre em contato com os donos.'})
aiovideodl(url)
.then(e => {
res.json({
status:true,
criador:'anonimo-bot',
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

//  CONSULTAS  \\

    app.get('/api-consultas/nome', async(req, res, next) => {    
token = req.query.token
nome = req.query.nome
if(!token)return res.json({status:false,msg:'Cadê o parametro token'})
if(!tokenc.includes(token))return res.json({status:false,msg:'Token inválido, entre em contato com os donos'})
if (!nome) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro nome?"}) 
  if(tokenc.includes(token)){
    fetch(encodeURI(`http://144.22.200.121:8088/rl/nome/${nome}/matheus-aluno`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

    app.get('/api-consultas/cpf', async(req, res, next) => {    
token = req.query.token
cpf = req.query.cpf
if(!token)return res.json({status:false,msg:'Cadê o parametro token'})
if(!tokenc.includes(token))return res.json({status:false,msg:'Token inválido, entre em contato com os donos'})
if (!cpf) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro cpf?"}) 
  if(tokenc.includes(token)){
    fetch(encodeURI(`http://144.22.200.121:8088/rl/cpf/${cpf}/matheus-aluno`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

    app.get('/api-consultas/cpf2', async(req, res, next) => {    
token = req.query.token
cpf = req.query.cpf
if(!token)return res.json({status:false,msg:'Cadê o parametro token'})
if(!tokenc.includes(token))return res.json({status:false,msg:'Token inválido, entre em contato com os donos'})
if (!cpf) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro cpf?"}) 
  if(tokenc.includes(token)){
    fetch(encodeURI(`http://144.22.200.121:8088/rl/cpf1/${cpf}/matheus-aluno`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

    app.get('/api-consultas/cpf3', async(req, res, next) => {    
token = req.query.token
cpf = req.query.cpf
if(!token)return res.json({status:false,msg:'Cadê o parametro token'})
if(!tokenc.includes(token))return res.json({status:false,msg:'Token inválido, entre em contato com os donos'})
if (!cpf) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro cpf?"}) 
  if(tokenc.includes(token)){
    fetch(encodeURI(`http://144.22.200.121:8088/rl/cpf2/${cpf}/matheus-aluno`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

    app.get('/api-consultas/cpf4', async(req, res, next) => {    
token = req.query.token
cpf = req.query.cpf
if(!token)return res.json({status:false,msg:'Cadê o parametro token'})
if(!tokenc.includes(token))return res.json({status:false,msg:'Token inválido, entre em contato com os donos'})
if (!cpf) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro cpf?"}) 
  if(tokenc.includes(token)){
    fetch(encodeURI(`http://144.22.200.121:8088/rl/cpf3/${cpf}/matheus-aluno`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

    app.get('/api-consultas/telefone', async(req, res, next) => {    
token = req.query.token
telefone = req.query.telefone
if(!token)return res.json({status:false,msg:'Cadê o parametro token'})
if(!tokenc.includes(token))return res.json({status:false,msg:'Token inválido, entre em contato com os donos'})
if (!telefone) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro telefone?"}) 
  if(tokenc.includes(token)){
    fetch(encodeURI(`http://144.22.200.121:8088/rl/telefone/${telefone}/matheus-aluno`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

    app.get('/api-consultas/tel', async(req, res, next) => {    
token = req.query.token
telefone = req.query.telefone
if(!token)return res.json({status:false,msg:'Cadê o parametro token'})
if(!tokenc.includes(token))return res.json({status:false,msg:'Token inválido, entre em contato com os donos'})
if (!telefone) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro telefone?"}) 
  if(tokenc.includes(token)){
    fetch(encodeURI(`http://144.22.200.121:8088/rl/telefone/${telefone}/matheus-aluno`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

    app.get('/api-consultas/cnpj', async(req, res, next) => {    
token = req.query.token
cnpj = req.query.cnpj
if(!token)return res.json({status:false,msg:'Cadê o parametro token'})
if(!tokenc.includes(token))return res.json({status:false,msg:'Token inválido, entre em contato com os donos'})
if (!cnpj) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro cnpj?"}) 
  if(tokenc.includes(token)){
    fetch(encodeURI(`http://144.22.200.121:8088/rl/cnpj/${cnpj}/${token}`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

    app.get('/api-consultas/cns', async(req, res, next) => {    
token = req.query.token
cns = req.query.cns
if(!token)return res.json({status:false,msg:'Cadê o parametro token'})
if(!tokenc.includes(token))return res.json({status:false,msg:'Token inválido, entre em contato com os donos'})
if (!cns) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro cns?"}) 
  if(tokenc.includes(token)){
    fetch(encodeURI(`http://144.22.200.121:8088/rl/cns/${cns}/${token}`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

    app.get('/api-consultas/placa', async(req, res, next) => {    
token = req.query.token
placa = req.query.placa
if(!token)return res.json({status:false,msg:'Cadê o parametro token'})
if(!tokenc.includes(token))return res.json({status:false,msg:'Token inválido, entre em contato com os donos'})
if (!placa) return res.json({ status : false, creator : `anonimo-bot`, message : "Cade o parametro placa?"}) 
  if(tokenc.includes(token)){
    fetch(encodeURI(`http://144.22.200.121:8088/rl/placa/${placa}/${token}`))
    .then(response => response.json())
        .then(hasil => {

        var resultado = hasil.resultado;
             res.json({
                 status: true,
                 criador: `Gabriel e Guilherme`,
                 resultado
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

router.all('/api-consultas/bin', async (req, res) => {
bin = req.query.bin
if(!bin)return res.json({
status:false,
motivo:'Coloque o parâmetro: bin'
})
token = req.query.token;
if(!token)return res.json({status:false,msg:'- Cadê o parâmetro token?'})
if(!tokenc.includes(token))return res.json({status:false,msg:'Token inválido, entre em contato com os donos'})
auu = await Kibar(`https://apirest.gestorvip.com/api/bin?bin=${bin}&apikey=Toms123`)
res.json({
status: true,
código: 999,
criador: `Gabriel e Guilherme`,
resultado: {
bin: `${auu.bin}`,
bandeira: `${auu.bandeira}`,
banco: `${auu.banco}`,
tipo: `${auu.tipo}`,
nivel: `${auu.nivel}`,
pais: `${auu.pais}`
}
})
})

router.all('/api-consultas/cep', async (req, res) => {
cep = req.query.cep
if(!cep)return res.json({
status:false,
motivo:'Coloque o parâmetro: cep'
})
token = req.query.token;
if(!token)return res.json({status:false,msg:'- Cadê o parâmetro token?'})
if(!tokenc.includes(token))return res.json({status:false,msg:'Token inválido, entre em contato com os donos'})
auu = await Kibar(`https://viacep.com.br/ws/${cep}/json/`)
res.json({
status: true,
código: 999,
criador: `Gabriel e Guilherme`,
resultado: {
cep: `${auu.cep}`,
logradouro: `${auu.logradouro}`,
uf: `${auu.uf}`,
ibge: `${auu.ibge}`,
gia: `${auu.gia}`,
ddd: `${auu.ddd}`,
siafi: `${auu.siafi}`
}
})
})

router.all('/api-consultas/ip', async (req, res) => {
ip = req.query.ip
if(!ip)return res.json({
status:false,
motivo:'Coloque o parâmetro: ip'
})
token = req.query.token;
if(!token)return res.json({status:false,msg:'- Cadê o parâmetro token?'})
if(!tokenc.includes(token))return res.json({status:false,msg:'Token inválido, entre em contato com os donos'})
auu = await Kibar(`https://ipinfo.io/${ip}/json`)
res.json({
status: true,
código: 999,
Criador: `Gabriel e Guilherme`,
resultado: {
ip: `${auu.ip}`,
hostname: `${auu.hostname}`,
cidade: `${auu.city}`,
região: `${auu.region}`,
Latitule_longitide: `${auu.loc}`,
país: `${auu.country}`,
Organização: `${auu.org}`,
ddd: `${auu.postal}`
}
})
})


////FUNÇAO DE PAGINA Q NAO TEM FUNÇÃO SOBRE ELA
app.get('*', function(req, res) {
res.status(404).json({
status:false,
msg: 'Página não encontrada no servidor, entre em contato com o donos'
})
})
 
//////MOSTRA SE O APP FOI ABERTO
app.listen(PORT, () => {
console.log('Aplicativo aberto na porta: ' + PORT)
})


module.exports = router;