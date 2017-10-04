// задача 1


var tableElem = document.getElementById('task1');
var elements = tableElem.getElementsByTagName('input');
var buttons = tableElem.getElementsByTagName('button');
var spans = tableElem.getElementsByTagName('span');

but1.onclick = function() {

    document.onclick = function(event1) {

        console.log(event1);

        if (elements.length > 5) {
            alert('Количество input на странице не больше 6!!!');
            return;
        } else if (event1.target.className == 'plus1') {

            document.getElementById('task1').innerHTML += '<input type="text" placeholder="введите текст">  <button class="minus1">-</button> <span id="thirdTask" hidden>Заполните поле! </span> <br></br>';

        } else if (event1.target.className == 'minus1') {

            document.getElementById('task1').innerHTML += ''
            if (elements[1] !== undefined) {
                elements[0].remove()
                buttons[1].remove()
            } else console.log('удалять нечего');
        }
    }
}

document.getElementById('add').onclick = function() {
    for (var i = 0; i < elements.length; i++) {
        var input = elements[i];
        resume1.value += input.value;
    }

}

document.getElementById('clear1').onclick = function() {
    resume1.value = '';
}

// задача 2

var tableElem2 = document.getElementById('task2');
var elements2 = tableElem2.getElementsByTagName('input');

document.getElementById('add2').onclick = function() {


    console.log(elements2[2].checked);

    if (elements2[2].checked == true) {

        for (var i = 0; i < elements.length; i++) {
            var input = elements[i];
            resume2.value += input.value;

        }

    } else if (elements2[0].checked == true) {

        for (var i = 0; i < elements.length; i++) {
            var input = elements[i];
            if (i % 2 !== 0) resume2.value += input.value;
            else resume2.value += '';

        }
    } else {

        for (var i = 0; i < elements.length; i++) {
            var input = elements[i];
            if (i % 2 == 0) resume2.value += input.value;
            else resume2.value += '';


        }
    }
}

document.getElementById('clear2').onclick = function() {
    resume2.value = '';
}

// задача 3

document.getElementById('task3').onclick = function() {

    console.log(elements);
    console.log(elements[0].value == '');

    for (var i = 0; i < elements.length; i++) {
        var input = elements[i];
        if (input.value == '') {
            input.style.border = '1px solid red';
            spans[i].hidden = !spans[i].hidden;

        };

    }

}

// задача 4

document.getElementById('task4').onclick = function() {

    form4.hidden = !form4.hidden;
    var1.hidden = var2.hidden = true;

    document.getElementById('opt1').onclick = function() {
        var1.hidden = !var1.hidden;
        form4.hidden = !form4.hidden;
    }

    document.getElementById('opt2').onclick = function() {
        var2.hidden = !var2.hidden;
        form4.hidden = !form4.hidden;
    }
}

// задача 5

but5.onclick = function() {

    document.onclick = function(event5) {

        if (event5.target.className == 'li5' && event5.target.style.backgroundColor == '') {
            event5.target.style.backgroundColor = 'red';
        } else event5.target.style.backgroundColor = '';

    }
    document.onkeydown = function(event) {

        if (event.keyCode == 13) {
            ul5.innerHTML += '<li class="li5">' + event.target.value + '</li>';
            console.log(ul5.value);
        }

    }

}
// задача 6

task6.onmouseenter = function() {

    in6.style.left = '128px';

}

task6.onmouseleave = function() {

    in6.style.left = '';

}

// задача 7


document.onmousemove = function(event7) {
    // res7.innerHTML=event7.target.tagName;
    if (event7.target.tagName == 'IMG') {

        res7.innerHTML = 'адрес изображения: ' + event7.target.currentSrc + '<br><br>' + 'атрибут alt: ' + event7.target.alt
    } else if (event7.target.tagName == 'A') {
        // console.log(event7);	
        res7.innerHTML = 'адрес ссылки: ' + event7.target.href + '<br><br>' + 'атрибут title: ' + event7.target.title + '<br><br>' + 'атрибут target: ' + event7.target.target
    }

    if (event7.target.tagName == 'IMG' && event7.target.alt == '') {
        alert7.innerHTML = 'нет атрибута alt!!!';
    } else if (event7.target.tagName == 'A' && event7.target.title == '' && event7.target.target == '') {
        alert7.innerHTML = 'нет атрибута title!!!' + '<br><br>' + 'нет атрибута target!!!';
    } else if (event7.target.tagName == 'A' && event7.target.title == '') {
        alert7.innerHTML = 'нет атрибута title!!!';
    } else if (event7.target.tagName == 'A' && event7.target.target == '') {
        alert7.innerHTML = 'нет атрибута target!!!';
    } else alert7.innerHTML = '';
}

// задача 8

document.getElementById('task8').onclick = function() {

    document.onmousemove = function(event8) {

        if (event8.target.tagName == 'IMG' && event8.target.alt == '') {
            event8.target.style.backgroundColor = '#fa6969';
        }
    }

}

// задача 9

but9.onclick = function() {
    var elements9 = document.getElementById('task9').childNodes;

    var y1 = y2 = y3 = y4 = y5 = y6 = 0;

    for (var i = 0; i < elements9.length; i++) {
        if (elements9[i].tagName == 'H1') y1 += 1;
        if (elements9[i].tagName == 'H2') y2 += 1;
        if (elements9[i].tagName == 'H3') y3 += 1;
        if (elements9[i].tagName == 'H4') y4 += 1;
        if (elements9[i].tagName == 'H5') y5 += 1;
        if (elements9[i].tagName == 'H6') y6 += 1;
    }

    res9.innerHTML = 'кол-во Н1: ' + y1 + '<br><br>' +
        'кол-во Н2: ' + y2 + '<br><br>' +
        'кол-во Н3: ' + y3 + '<br><br>' +
        'кол-во Н4: ' + y4 + '<br><br>' +
        'кол-во Н5: ' + y5 + '<br><br>' +
        'кол-во Н6: ' + y6 + '<br><br>'

    if (y1 == 0) alert9.innerHTML += 'отсутствуют Н1' + '<br><br>'
    if (y2 == 0) alert9.innerHTML += 'отсутствуют Н2' + '<br><br>'
    if (y3 == 0) alert9.innerHTML += 'отсутствуют Н3' + '<br><br>'
    if (y4 == 0) alert9.innerHTML += 'отсутствуют Н4' + '<br><br>'
    if (y5 == 0) alert9.innerHTML += 'отсутствуют Н5' + '<br><br>'
    if (y6 == 0) alert9.innerHTML += 'отсутствуют Н6' + '<br><br>'
}


// задача 10

task10.onclick = function(event10) {
    var title10 = document.querySelector('title');
    var descr10 = document.querySelector('meta[name="description"]')
    var key10 = document.querySelector('meta[name="keywords"]')

    if (title10 !== null) {

        res10.innerHTML = 'длина тега meta title: ' + title10.innerHTML.length + '<br><br>'
    } else alert10.innerHTML = 'тег meta title - отсутствует!!!' + '<br><br>'

    if (descr10 !== null) {

        res10.innerHTML += 'длина тега meta description: ' + descr10.innerHTML.length + '<br><br>'
    } else alert10.innerHTML += 'тег meta description - отсутствует!!!' + '<br><br>'

    if (key10 !== null) {

        res10.innerHTML += 'тег meta keywords есть в наличии '
    } else alert10.innerHTML += 'тег meta keywords - отсутствует!!!'

}