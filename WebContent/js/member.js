//이름 아이디 비밀번호 재확인 중복체크

$(document).ready(function(){
	var sId;
	var newWindow = null;
	var post_window;
	
	$('#addr_search_button').on('click', function(){
		post_window = window.open("checkPost.do", "", "width=400 height=400 scrollbars=yes");
		
	});
	
	$('#child_post_search_button').on('click', function(){
		var roadname = $('#roadname').val();
		var sigungu = $('#sigungu').val();
		var sido = $('select[name=sido]').val();
		
		alert(sido);
		location.href = 'checkPost.do?sido='+sido+'&sigungu='+sigungu+'&roadname='+roadname;
		
	});
	
	//중복체크
	$('#check').on('click', function(){
		sId = $('#id').val();
		
		$('#id_div').empty();
		
		if(sId == ''){
			$('#id_div').html("먼저아이디를 입력하세요").css('color', 'magenta').css('font-size', '9pt').css('font-weight', 'bold');
		}else{
			$.ajax({
				type : "POST",
				url : "checkId.do",
				data : {"id" : sId},
				dataType : "text",
				success : function(data){
					alert(data);
					data = data.trim();
					alert(data);
					if(data == 'exist'){
						$('#id_div').html("사용 불가능한 아이디").css('color', 'red').css('font-size', '9pt');
					}else if(data == 'not_exist'){
						$('#id_div').html("사용가능한 아이디").css('color', 'blue').css('font-size', '9pt');
					}
				}
				
			});
			
		}
		/*else{
			if(newWindow == null){
				newWindow = window.open("checkId.do?id="+sId,"","width=300 height=100 location=yes");
			}else {
				alert(typeof(newWindow));
				if(typeof(newWindow) == 'undefined' || newWidnow.closed){
					//newWindow.close() == false
					alert("false");
					newWindow.focus();
				}else{
					newWindow = window.open("checkId.do?id="+sId,"","width=300 height=100 location=yes");
				}
			}
		}*/
	});
	
	//자식창 중복체크 다시
	$('#check_again').on('click', function(){
		sId = $('#id_again').val();
		if(sId==''){
			$('#check_id_div').html("아이디를 입력하세요").css('color', 'red').css('font-size', '9pt');
		}else{
			var href = location.href = 'checkId.do?id='+sId;
		}
	});
	
	
	//중복체크에서 사용
	$('#login_ok').on('click', '#use_id', function(){
		$('form[name=writeForm] input[name=id]').val(sId);
		sId = $('#id_able').val();
		//opener.writeForm.id.value = sId;
		$('#id', opener.writeForm).val(sId);
		//$('form[name=writeForm] #pwd').focus();
		$('#pwd', opener.writeForm).focus();
		//opener.writeForm.pwd.focus();
		window.close();
	});
	
	
	$('#join').on('click', function(){
		var name = $('#name').val();
		var id = $('#id').val();
		var pwd = $('#pwd').val();
		var repwd = $('#repwd').val();
		var idCheck = $('#idCheck').val();
		
		
		$('#name_div').empty();
		$('#id_div').empty();
		$('#password_div').empty();
		$('#repassword_div').empty();
		
		
		if(name == ''){
			$('#name_div').html("이름을 입력하세요").css('color', 'red').css('font-size', '9pt');
			$('#name').focus();
		}else if(id == ''){
			$('#id_div').html("아이디를 입력하세요").css('color', 'red').css('font-size', '9pt');
			$('#id').focus();
		}else if(pwd == ''){
			$('#password_div').html("비밀번호를 입력하세요").css('color', 'red').css('font-size', '9pt');
			$('#pwd').focus();
		}else if(repwd == ''){
			$('#repassword_div').html("재확인 비밀번호를 입력하세요").css('color', 'red').css('font-size', '9pt');
			$('#repwd').focus();
		}else if($('#id').val() != sId){
			$('#id_div').html("중복체크 하세요").css('color', 'red').css('font-size', '9pt');
		}else{
			$('#writeForm').submit();
		}
		
		
	});
	
	//로그인 유효성검사
	
	$('form[name=loginForm] #login_button').on('click', function(){
		var id = $('input[name=id]').val();
		var pwd = $('input[name=password]').val();
		$('#id_div').empty();
		$('#pwd_div').empty();
		
		
		if(id == ''){
			$('#id_div').html("아이디를 입력하세요").css('color', 'red').css('font-size', '9pt');
			$('input[name=id]').focus();
		}else if(pwd == ''){
			$('#pwd_div').html("비밀번호를 입력하세요").css('color', 'red').css('font-size', '9pt');
			$('input[name=password]').focus();
		}else{
			$('form[name=loginForm]').submit();
		}
	});
	
	
	$('form[name=checkPostForm]').on('click', '.addressA', function(){
		
		//var zipcode = $('#addressA').parents().parents().children('td:eq(0)').text();
		//var zipcode = $('#addressA').parent().prev().text();
		var zipcode = $('.addressA:eq(0)').text();
		var addr = $('.addressA:eq(1)').html();
		
		$('#zipcode', opener.document).val(zipcode);
		$('#addr1', opener.document).val(addr);
		$('#addr2', opener.document).focus();
		window.close();
		
	});
});