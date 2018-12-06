var saveSelectColor = {
    'Name': 'selectColor',
    'Color': 'theme-white'
};

$(function () {
    $(".change-sun-moon").on('click',function () {
        setColor($('body').attr('class'));
    });

    // 判断用户是否已有自己选择的模板风格
    if (storageLoad('selectColor')) {
        setColor(storageLoad('selectColor').Color);
    } else {
        $(".change-sun-moon").find('span').addClass('am-icon-moon-o');
        $('body').attr('class', 'theme-white')
    }
});

// 本地缓存
function storageSave(objectData) {
    localStorage.setItem(objectData.Name, JSON.stringify(objectData));
}

function storageLoad(objectName) {
    if (localStorage.getItem(objectName)) {
        return JSON.parse(localStorage.getItem(objectName))
    } else {
        return false
    }
}

function setColor(themColor) {
    if(themColor.indexOf('theme-white') != -1){
        $('.change-sun-moon').find('span').removeClass('am-icon-moon-o');
        $('.change-sun-moon').find('span').addClass('am-icon-sun-o');
        $('body').removeClass('theme-white');
        $('body').addClass('theme-black');
        saveSelectColor.Color='theme-white';
        storageSave(saveSelectColor);
    }else {
        $('.change-sun-moon').find('span').removeClass('am-icon-sun-o');
        $('.change-sun-moon').find('span').addClass('am-icon-moon-o');
        $('body').removeClass('theme-black');
        $('body').addClass('theme-white');
        saveSelectColor.Color='theme-black';
        storageSave(saveSelectColor);
    }
}