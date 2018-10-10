package member.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.control.CommandProcess;

import member.dao.MemberDAO;

public class CheckIdAction implements CommandProcess{

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) throws Throwable {
		
		//아이디 세션받아옴
		String id = request.getParameter("id");
		System.out.println("아이디는 : "  + id);
		
		//DB
		
		MemberDAO memberDAO = MemberDAO.getInstance();
		boolean check = memberDAO.isExitsId(id);
		System.out.println(check);
		
		request.setAttribute("id", id);
		
		
		//응답
		if(check) {
			return "/member/checkIdFail.jsp";
		}else {
			return "/member/checkIdOk.jsp";
		}
		
		
		
	}
	
}
