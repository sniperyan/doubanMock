/**
 * Created by liyan on 2017/1/10.
 */
var in_theaters = require('./in_theaters')
var in_theaters_20 = require('./in_theaters_20')

var come_0 =require('./coming_soon_0')
var come_20 =require('./coming_soon_20')
var come_40 =require('./coming_soon_40')
var come_60 =require('./coming_soon_60')
var come_74 =require('./coming_soon_74')

var top_0 =require('./top250_0')
var top_20 =require('./top250_20')
var top_40 =require('./top250_40')

var subject = require('./subject');
var celebrity = require('./celebrity');

var search_0 = require('./search_0');
var search_20 = require('./search_20');
var search_40 = require('./search_40');
module.exports = function (app) {
    //热映
    app.get("/v2/movie/in_theaters",function (req, res) {
        if(req.query.start==0){
            res.json(in_theaters)
        }else if(req.query.start==20){
            res.json(in_theaters_20)
        }else {
            res.json({"count": 20, "start": 23, "total": 23, "subjects": [], "title": "\u6b63\u5728\u4e0a\u6620\u7684\u7535\u5f71-\u5357\u4eac"})
        }
    })
    //即将上映
    app.get("/v2/movie/coming_soon",function (req, res) {
        if(req.query.start==0){
            res.json(come_0)
        }else if(req.query.start==20){
            res.json(come_20)
        }else if(req.query.start==40){
            res.json(come_40)
        }else if(req.query.start==60){
            res.json(come_60)
        }else {
            res.json(come_74)
        }
    })
    //top250
    app.get("/v2/movie/top250",function (req, res) {
        if(req.query.start==0){
            res.json(top_0)
        }else if(req.query.start==20) {
            res.json(top_20)
        }else {
            res.json(top_40)
        }
    })
    //电影详情
    app.get("/v2/movie/subject/:id",function (req, res) {
        console.log(req.params.id);
        res.json(subject);
    })
    //影人条目信息
    app.get("/v2/movie/celebrity/:id",function (req, res) {
        console.log(req.params.id);
        res.json(celebrity);
    })
    //search
    app.get("/v2/movie/search",function (req, res) {
        if(req.query.start==0){
            res.json(search_0)
        }else if(req.query.start==20){
            res.json(search_20)
        }else {
            res.json(search_40)
        }
    })

}