//tr js code

	$('.viewModel_3').click(function(){
		$('.id').val($(this).data('id'));
		$('#myModal_3').modal('show');

		var currentRow=$(this).closest("tr"); 
         
         var col1=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
         var col2=currentRow.find("td:eq(1)").text(); // get current row 2nd TD
         var col3=currentRow.find("td:eq(2)").text(); // get current row 3rd TD
         var data=col1+"\n"+col2+"\n"+col3;
         
         alert(data);

	});