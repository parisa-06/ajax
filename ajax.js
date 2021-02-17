if (window.XMLHttpRequest) {
    request = new XMLHttpRequest()
} else {
    request = new ActiveXObject('Microsoft.XMLHTTP')
}

request.open('GET', 'https://api.noaeincloud.ir/api/sample')
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        var items = JSON.parse(request.responseText)
        console.log(items.message);
    }

else {
        console.log('err')
    }
}


request.send()