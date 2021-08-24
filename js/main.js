$(document).ready(function() {
    var table = $('#example').DataTable({
        dom: 'Qlfrtip',
        searchBuilder: true,
    });
    table.searchBuilder.container().prependTo(table.table().container());
} );

/* $(document).ready(function() {
    $('#example').DataTable();
} ); */

/* $(document).ready(function() {
    $('#example').DataTable({
        dom: 'Qfrtip'
    });
} ); */