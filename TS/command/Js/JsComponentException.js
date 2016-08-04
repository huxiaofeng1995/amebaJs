// JS系统异常主要包含以下6种:
// EvalError: raised when an error occurs executing code in eval()  
// RangeError: raised when a numeric variable or parameter is outside of its valid range  
// ReferenceError: raised when de-referencing an invalid reference  
// SyntaxError: raised when a syntax error occurs while parsing code in eval()  
// TypeError: raised when a variable or parameter is not a valid type  
// URIError: raised when encodeURI() or decodeURI() are passed invalid parameters  
// 上面的六种异常对象都继承自Error对象。他们都支持以下两种构造方法: 
// new Error();new Error("异常信息"); 

// Error具有下面一些主要属性：
// message: 错误信息 (在IE下同description)  
// name: 错误类型.  

/*
 * 自定义异常基类
 */
function BaseException() { }
BaseException.prototype = new Error();
BaseException.prototype.constructor = BaseException;
BaseException.prototype.toString = function () {
    return this.name + ": " + this.message;
};

/*
 * 参数异常
 * message {String} 异常信息
 */
function ArgumentException(message) {
    this.name = "ArgumentException";
    this.message = message;
}
ArgumentException.prototype = new BaseException();
ArgumentException.prototype.constructor = ArgumentException;

/*
 * 参数为null异常
 * args {String} 值为null的参数名称
 */
function ArgumentNullException(args) {
    this.name = "ArgumentNullException";
    this.message = args + " is null.";
}
ArgumentNullException.prototype = new ArgumentException();
ArgumentNullException.prototype.constructor = ArgumentNullException;

/*
 * 运行时异常
 * innerException {object} 内部异常
 */
function RuntimeException(innerException) {
    this.name = "RuntimeException";
    this.message = innerException.toString();
    this.innerException = innerException;
}
RuntimeException.prototype = new BaseException();
RuntimeException.prototype.constructor = RuntimeException;