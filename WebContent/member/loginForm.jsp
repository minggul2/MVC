<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form name = "loginForm" method = "post" action = "login.do">
	 <table border = "1" align = "center" cellpadding = "5" cellspacing = "0">
	  <caption><h2>로그인</h2></caption>
	   <tr>
	    <td>아이디</td>
	    <td><input type = "text" name = "id">
	    	<div id = "id_div"></div>
	    
	    </td>
	   </tr>
	   
	   <tr>
	    <td>비밀번호</td>
	    <td><input type = "password" name = "password">
	    	<div id = "pwd_div"></div>
	    </td>
	    
	   </tr>
	  
	   <tr align = "center">
	    <td colspan = "2">
	     <input type = "button" value = "로그인" id = "login_button">
	     <input type = "button" value = "회원가입" onclick = "location.href = 'writeForm.do'">
	    </td>
	   </tr>
	 </table>
	</form>
	<script src = "http://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script src = "../js/member.js">
	 
	</script>
</body>
</html>