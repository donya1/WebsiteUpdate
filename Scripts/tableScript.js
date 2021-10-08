  $('.backgroundLaws').click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#aboutLaws").offset().top 
  }, 500);
});

    $('.offenseTypeDescriptions').click(function() {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#aboutOffenses").offset().top 
  }, 500);
});



$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('#example tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );
 
    // DataTable
    var table = $('#example').DataTable({
        initComplete: function () {
            // Apply the search
            this.api().columns().every( function () {
                var that = this;
 
                $( 'input', this.footer() ).on( 'keyup change clear', function () {
                    if ( that.search() !== this.value ) {
                        that
                            .search( this.value )
                            .draw();
                    }
                } );
            } );
        }
    });
 
} );