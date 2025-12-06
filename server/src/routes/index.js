
const { Router  }= require('express');
const router = Router();
const routerHome = require("./home");
const routerform = require("./form");
const routerContact = require("./contact");
const routerAbout = require("./about");
const routerServices = require("./services");
const routerPaymentmethod = require("./paymentmethod");
const routerRedactionTesis= require("./redactiontesis");
const routerAcademi= require("./academi");
const routerCorrection= require("./correction");
const routerMonograph= require("./monograph");
const routerMemoryjob= require("./memoryjob");
const routerScientificarticle= require("./scientificarticle");
const routerStatisticalanalysis= require("./statisticalanalysis");





router.use('/api',routerHome, routerform, routerContact, routerAbout, routerServices, routerPaymentmethod, routerRedactionTesis, routerAcademi, routerCorrection, routerMonograph, routerMemoryjob, routerScientificarticle, routerStatisticalanalysis) 



module.exports = router