
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
const routerAuth = require('./auth');
const { requireAdmin } = require('../middleware/adminAuth');





router.use('/api', routerAuth);

// Los formularios de visitantes, los pagos y los webhooks deben seguir siendo públicos.
const publicWritePaths = new Set(['/contact', '/cotizacion', '/crear-pago', '/webhook']);
router.use('/api', (req, res, next) => {
  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method) && !publicWritePaths.has(req.path)) {
    return requireAdmin(req, res, next);
  }
  return next();
}, routerHome, routerform, routerContact, routerAbout, routerServices, routerPaymentmethod, routerRedactionTesis, routerAcademi, routerCorrection, routerMonograph, routerMemoryjob, routerScientificarticle, routerStatisticalanalysis);



module.exports = router
