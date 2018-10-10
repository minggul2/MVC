//이름 아이디 비밀번호 재확인 중복체크

$(document).ready(function(){
	var sId;
	var newWindow = null;
	
	
	$('#check').on('click', function(){
		sId = $('#id').val();
		
		if(newWindow == null){
			newWindow = window.open("checkId.do?id="+sId,"","width=300 height=100 location=yes");
		}else {
			if(newWindow.close() == false){
				newWindow.focus();
			}else{
				newWindow = window.open("checkId.do?id="+sId,"","width=300 height=100 location=yes");
			}
		}
	});
	
	$('#check_again').on('click', function(){
		sId = $('#id_again').val();
		var href = location.href = 'checkId.do?id='+sId;
		alert(href);
	});
	
	
	$('#login_ok').on('click', '#use_id', function(){
		$('form[name=writeForm] input[name=id]').val(sId);
		sId = $('#id_able').val();
		opener.writeForm.id.value = sId;
		//$('form[name=writeForm] #pwd').focus();
		opener.writeForm.pwd.focus();
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
		}else if(idCheck == ''){
			$('#id_div').html("중복체크 하세요").css('color', 'red').css('font-size', '9pt');
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
	
	
	//회원정보수정 데이터 넣기
	
	//$('form[name=modifyForm] input[name=name]').val(${memberDTO.name} + "1");
	//window.onload=function(){
		//document.modifyForm.gender['<%=memberDTO.getGender()%>'].checked = true;
		//document.modifyForm.email1.value = '<%=memberDTO.getEmail1()%>';
		
		/*
		var email = '<%=memberDTO.getEmail2()%>';
		
		for(var i = 0; i < email2.length; i++){
			if(document.modifyForm.email2.options[i].value == email){
				document.modifyForm.email2.options[i].selected = true;							
			}
		}
		
		var tel1 = '<%=memberDTO.getTel1()%>';
		
		for(var i = 0; i< tel1.length; i++){
			if(document.modifyForm.tel1.options[i].value == tel1){
				document.modifyForm.tel1.options[i].selected = true;	
			}
		}getElementById 로 대체가능
		*/
		
		
		/*document.getElementById('email2').value = '<%=memberDTO.getEmail2() %>';
		document.getElementById('tel1').value = '<%=memberDTO.getTel1() %>';
		
		document.modifyForm.tel2.value = '<%=memberDTO.getTel2()%>';
		document.modifyForm.tel3.value = '<%=memberDTO.getTel3()%>';
		document.modifyForm.zipcode.value = '<%=memberDTO.getZipcode()%>';
		document.modifyForm.addr1.value = '<%=memberDTO.getAddr1()%>';
		document.modifyForm.addr2.value = '<%=memberDTO.getAddr2()%>';*/
		
});