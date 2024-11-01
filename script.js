$( document ).ready(function() {
    console.log( "ready!" );
            
    let btn = $('#submitDay');
    btn.on('click', function(){

        let selectedDay = $('#dayInput').val().toUpperCase();
        if (["A", "B", "C", "D", "E", "F", "G"].includes(selectedDay)){

            $.ajax({
                type: 'GET',
                url: 'https://api.npoint.io/981011375e51b80de040',
                dataType: 'json',
                success: function (data) {
                    let daySchedule = data.schedule.filter(classItem => classItem.days.includes(selectedDay));
                    console.log(daySchedule)

                    renderHTML(daySchedule)

                    
                        return htmlString;
                    

                    





                },
                error: function () {
                    alert ('Connection Error')
                }
            
            })
            
            

                function renderHTML(daySchedule){
                    let htmlString = "";
                    daySchedule.forEach(classItem => {
                        htmlString += `
                        <tr>
                            <td>${classItem.period}</td>
                            <td>${classItem.class}</td>
                            <td>${classItem.teacher}</td>
                            <td>${classItem.room}</td>
                        </tr>`
                    });

                    $('#scheduleList').empty().append(htmlString)


                }
}else{
    alert('Please Choose a Letter Day A-G')
}
    })
})