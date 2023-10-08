function visitSemester() {
    var e = document.getElementById("choose-semesters");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
  
    // console.log(text);


    if(value == 1 && text === 'Semester-1') {
        // fetch('comp-sc.html')
        // .then(response=> response.text())
        // .then(texts=> document.querySelector('html').innerHTML = texts);
        window.location.assign("semester-pages/sem-1.html")
    }
    if(value == 2 && text === 'Semester-2') {
        window.location.assign("semester-pages/sem-2.html")
    }
    if(value == 3 && text === 'Semester-3') {
        window.location.assign("semester-pages/sem-3.html")

    }
    if(value == 4 && text === 'Semester-4') {
        window.location.assign("semester-pages/sem-4.html")
    }
    if(value == 5 && text === 'Semester-5') {
        window.location.assign("semester-pages/sem-5.html")
    }
    if(value == 6 && text === 'Semester-6') {
        window.location.assign("semester-pages/sem-6.html")
    }
   
}