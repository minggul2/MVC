package member.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.control.CommandProcess;

import member.dao.MemberDAO;
import memberjsp.bean.MemberDTO;

public class LoginAction implements CommandProcess{

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		//DB贸府
		
		//单捞磐
		String id = request.getParameter("id");
		String password = request.getParameter("password");
		
		//DB
		MemberDAO memberDAO = MemberDAO.getInstance();
		MemberDTO memberDTO = memberDAO.login(id, password);
		
		//览翠
		if(memberDTO == null) {
			return "/member/loginFail.jsp";
		}else {
			//技记
			HttpSession session = request.getSession(); //技记 积己
			session.setAttribute("memName", memberDTO.getName());
			session.setAttribute("memId", id);
			session.setAttribute("memEmail", memberDTO.getEmail1() + "@" + memberDTO.getEmail2());
			
			return "/member/loginOk.jsp";
		}	
	}
}
