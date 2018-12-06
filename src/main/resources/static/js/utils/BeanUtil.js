$(function () {

    function ResultUtil() {};
    ResultUtil.isOk = function (data) {
        let code = data.code;
        if(code === 200){
            return true;
        }else {
            return false;
        }
    };

    ResultUtil.getBody = function (data) {
        let code = data.code;
        if(code === 200){
            return data.body;
        }else {
            return data.msg;
        }
    };

});



