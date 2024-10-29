$( document ).ready(function() {
    console.log( "ready!" );
            
    let btn = $('#submitDay');
    btn.on('click', function(){

        let selectedDay = $('#dayInput').text();
        if (selectedDay != ["A", "B", "C", "D", "E", "F", "G"]){
            //add an error message
        }

    btn.on('click', function() {
        $.ajax({
            type: 'GET',
            url: 'https://api.npoint.io/981011375e51b80de040',
            dataType: 'json',
            success: function (data) {
                let 
            },
            error: function () {
                console.log('Connection Error')
            }
        });
    })
    })
    
});