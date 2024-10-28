let pageCounter = 1
const btn = $('#btn')

btn.on('click', function() {
    $.ajax({
        type: 'GET',
        url: `https://api.npoint.io/981011375e51b80de040`,
        success: function (data) {
            renderHTML(data)
            pageCounter++
            if (pageCounter > 3) {
                btn.addClass('hide-me')
            }
        },
        error: function () {
            console.log('Connection Error')
        }
    });
})