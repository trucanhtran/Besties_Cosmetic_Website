var eyesMakeup  = require('./EyesMakeup.json');
var boKitDungThu = require('./BoKitDungThu.json');
var essenseSerumAmpoule = require('./EssenseSerumAmpoule.json');
var faceMakeUp = require('./FaceMakeUp.json');
var kemChongNang = require('./KemChongNang.json');
var kemDuongDa = require('./KemDuongDa.json');
var kemDuongMat = require('./KemDuongMat.json');
var lipsMakeUp = require('./LipsMakeUp.json');
var lotion = require('./Lotion.json');
var matNa = require('./MatNa.json');
var matNaNgu = require('./MatNaNgu.json');
var other = require('./Other.json');
var suaRuaMat = require('./SuaRuaMat.json');
var tayTeBaoChet = require('./TayTeBaoChet.json');
var tayTrang = require('./TayTrang.json');
var tonerNuocHoaHong = require('./TonerNuocHoaHong.json');
var triMunTriTham = require('./TriMunTriTham.json');
var xitKhoang = require('./XitKhoang.json');
var allProducts = require('./all_products.json');

module.exports = function() {
  return {
    eyesMakeup: eyesMakeup,
    boKitDungThu: boKitDungThu,
    essenseSerumAmpoule: essenseSerumAmpoule,
    faceMakeUp: faceMakeUp,
    kemChongNang: kemChongNang,
    kemDuongDa: kemDuongDa,
    kemDuongMat: kemDuongMat,
    lotion: lotion,
    lipsMakeUp: lipsMakeUp,
    matNa: matNa,
    matNaNgu: matNaNgu,
    other: other,
    suaRuaMat: suaRuaMat,
    tayTeBaoChet: tayTeBaoChet,
    tayTrang: tayTrang,
    tonerNuocHoaHong: tonerNuocHoaHong,
    triMunTriTham: triMunTriTham,
    xitKhoang: xitKhoang,
    allProducts: allProducts,
  }
}