/**
 * Created by Администратор on 8/7/2017.
 */
$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
} );


/**
 * */
function Clone(j) {
    $('.default')
        .clone()
        .removeClass('default')
        .addClass('tst' + j)
        .css('display','block')
        .appendTo( "#sortable");}
;
/* function Remove() {
 var $set = $('.ui-state-default');//
 var n=$set.index($(this).parent());//получение порядкового номера удаляемой строки
 localStorage.setItem("tst"+ n, false);
 $(this).parent().css('display','none');//удаление строки
 console.log($(this).parent().remove());
 for(k=n; k<=$(".ui-state-default").length ;k++){
 localStorage.setItem("tst"+ k, localStorage.getItem('tst' + (k+1)));//цикл перемещения данных л/х на освободившийся ключ

 }

 }*/





var i = 0;
var j = 0;
var b;
var addTask =
    {
        saveChangeNewTask : $('#saveChangeNewTask'),// ?
        saveChangeNewTask2 : $('#saveChangeNewTask2'),
        addNewTask        : $('#addNewTask'),
        addNewTask2        : $('#addNewTask2'),
        localStore : function() {//формирование меню по данным локального хранилища
            for (j=1 ; j<=100 ; j++) {
                if (localStorage.getItem('tst' + j) != (null) && localStorage.getItem('tst' + j)!= ("null") ) {// проверка на наличие данніх по ключу
                    //   строка  "null" присваивается последниму ключу при смещении значений во время удаления задания

                    Clone(j); //Клонирование строки

                    $('.tst'+j).find('p').html(localStorage.getItem('tst' + j));// внесение строки с локального хранилища

                    $('.tst'+j).find('.btn-warning').click(function()//подключение события на кнопку удаления
                    {

                        // Remove()  при вызове этой функции ключ записывается , но удаление строки не срабатывает
                        var $set = $('.ui-state-default');//
                        var n=$set.index($(this).parent());//получение порядкового номера удаляемой строки
                        localStorage.setItem("tst"+ n, false);
                        $(this).parent().css('display','none');//удаление строки
                        console.log($(this).parent().remove());
                        for(k=n; k<=$(".ui-state-default").length ;k++) {
                            localStorage.setItem("tst" + k, localStorage.getItem('tst' + (k + 1)));
                        }//цикл перемещения данных л/х на освободившийся ключ
                        i=n-1//присвоения значения порядкового номера для корректного формирования ключа при добавлении новой строки
                        n=false

                    });

                    $('.tst'+j).find('.btn-primary').click(function() {//подключение события на кнопку редактирования
                        addTask.addNewTask2.val($(this).parent().find('p').html());//
                        b = this;
                        var $set = $('.ui-state-default');
                        var n=$set.index($(this).parent());//изъятие порядкового удаляемой строки
                        console.log(n);

                        addTask.addNewTask2.html($(this).parent().find('p').html());//добавление в модальное окно редактирования содержания редактируемой строки
                        addTask.saveChangeNewTask2.click(function () {//добавление в редактируемую строку содержимого модального окна

                            $(b).parent().find('p').html(addTask.addNewTask2.val());
                            localStorage.setItem("tst"+ n, addTask.addNewTask2.val());//внесение изменения в л/х
                            n= false; //!!!!при отсутсвии этой команды редктирование нескольких строк добавленных при загрузки по данным л/х будут корректным,
                                      // но  всем ключам, подвергшихся редактированию строк , будет присвоено значение последней редакрованой строки
                        });


                    });

                }
                else { i = j-1; break}// если отсутствует значение ключа, то берем порядковый номер для нового ключа,
                // который будет сформирован при добалении новой строки и выходим из цикла
            }
        },
        addNew       : function(){//Добавление нового задания

            i++;
            Clone(i)
            $('.tst'+i).find('p').html(addTask.addNewTask.val());
            addTask.addNewTask.val("");//очистка модального окна добавления




            localStorage.setItem('tst' + i, $('.tst' + i).find('p').html());//

            $('.tst'+i).find('.btn-warning').click(function()
            {
                var $set = $('.ui-state-default');
                var n=$set.index($(this).parent());
                localStorage.setItem("tst"+ n, false);
                $(this).parent().css('display','none');
                console.log($(this).parent().remove());
                for(k=n; k<=$(".ui-state-default").length ;k++){
                    localStorage.setItem("tst"+ k, localStorage.getItem('tst' + (k+1)));

                }
                localStorage.removeItem("tst"+ $(".ui-state-default").length)
                i= $(".ui-state-default").length-1
                n=false
            });


            $('.tst'+i).find('.btn-primary').click(function() {
                addTask.addNewTask2.val($(this).parent().find('p').html());//
                b = this;
                var $set = $('.ui-state-default');
                var n=$set.index($(this).parent());
                console.log(n);

                addTask.addNewTask2.html($(this).parent().find('p').html());
                addTask.saveChangeNewTask2.click(function () {
                    $(b).parent().find('p').html(addTask.addNewTask2.val());

                    localStorage.setItem( "tst"+n, addTask.addNewTask2.val());
                    n= false;
                });

            });


        }
    };

window.onload =addTask.localStore ;
addTask.saveChangeNewTask.click(addTask.addNew);