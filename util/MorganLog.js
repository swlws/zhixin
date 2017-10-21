var path = require('path');
var fs = require('fs');
var tool = require('./Tool.js');
var rfs = require('rotating-file-stream');
var config = require(path.join(__dirname,'..','config','config.json')).log.morgan;

let format = function(tokens , req , res){
	return [
		tokens.method(req, res),
		tokens.url(req, res),
		tokens.status(req, res),
		tokens.date(req,res,'web'),
		tokens['remote-addr'](req,res),
		tokens['remote-user'](req,res),
		tokens['http-version'](req,res),
		tokens.res(req, res, 'content-length'), '-',
		tokens['response-time'](req, res), 'ms',
		tokens['user-agent'](req,res),
	].join(' ')
}

let getStream = function(){
	var logDirectory = path.join(__dirname,'..','..','work','log');
	tool.mkdir(logDirectory);
	return rfs('http.log', {
		interval: '1d', // rotate daily
		path: logDirectory
	});
	// return fs.createWriteStream(path.join(__dirname,'log','http.log'), {flags: 'a',encodeing:'utf-8'});
}

module.exports = {
	format:format,
	options:{
		stream: config.enabled ? getStream() : process.stdout
	}
}