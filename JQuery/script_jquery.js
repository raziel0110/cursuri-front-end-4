$(window).on('load',onHtmlLoading);

    function onHtmlLoading(){
    console.log("window load");

    var list = $('#comments-list');
    console.log(list[0]);

    var firstP = $(".comment-item p")[0];
    console.log('first paragraph inside comment-item',firstP);

    var h1 = $("h1");
    console.log(h1.text());//TEXT
    console.log(h1[0]);// HTML element
    h1.text('JQuery DOM MANIPULATION');
    console.log(h1.text());

    h1.html("<em>JQuery</em> DOM Manipulation");

    console.log("ID attribyte of list", list.attr("id"));
    list.attr("id","comments-list-new");
    console.log("ID attribyte of list", list.attr("id"));

    list.css({
        "border":"solid 1px red",
        "color":"blue"
    });

    // add new elements

    var element = "<section class='comment-item'><h2>name</h2><p>content</p>";
    list.append(element);

    $('<p>My new element</p>').insertBefore(list);

    //remove element

    var firstComment = $('.comment-item')[0];
    console.log(($('.comment-item')),firstComment);
    firstComment.remove();



    var button  = $('#btn-submit');
    button.on("click",function(event){
    event.preventDefault();
    console.log('clicked',event);
  });

}

 