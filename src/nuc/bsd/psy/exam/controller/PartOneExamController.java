package nuc.bsd.psy.exam.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.jfinal.core.Controller;
import com.jfinal.kit.HttpKit;

import nuc.bsd.psy.base.model.Cls;
import nuc.bsd.psy.base.model.Paper;
import nuc.bsd.psy.base.model.Que;
import nuc.bsd.psy.base.model.User;
import nuc.bsd.psy.domain.DbTester;
import nuc.bsd.psy.exam.service.PartOneQuestionService;
import nuc.bsd.psy.tools.IPUtil;

public class PartOneExamController extends Controller {
	/**
	 * 默认首页方法
	 */
	public void index() {
		//render("zhunkaozheng.html");
		render("login.html");
	}
	public void logon(){
		String account = getPara("username");
		String pass = getPara("password");
		User user = new User();
		user.setAccount(account);
		user.setPass(pass);
		user.setRecId(-1);
		new PartOneQuestionService().getUser(user);
		if(user.getRecId()==-1) {
			setAttr("code", 1);
		}else {
		setAttr("code", 0);
		setSessionAttr("user", user);
		}
		renderJson();
	}
	public void getSchool() {
		Cls cls = new Cls();
//		String username = getPara("username");
//		String password = getPara("password");
//		cls.setUsername(username);
//		cls.setPassword(password);
		User user = getSessionAttr("user");
		List<Cls> ques =new PartOneQuestionService().getSchool(cls,user);
		renderJson(ques);
	}
	public void getTester(){
		HttpServletRequest request = getRequest();
		String IP = IPUtil.getRealIpAddr(request);
		setSessionAttr("id_num", "410621197910271516");
		String id_num = getSessionAttr("id_num");
		System.out.println("从session中获取用户的身份证编号:" + getSessionAttr("id_num"));
		//根据身份证获取测评者的基本信息
		List<DbTester> testers = new PartOneQuestionService().getUserToTester(id_num);
		//List<DbExamer> examers = new ExamService().getUserToZKZ(IP);
		renderJson(testers);
	}
	public void sendPBIntro(){
		render("/Views/PartOne/pbIntro.html");
	}
	public void sendPBTest(){
		render("/Views/PartOne/pbTest.html");
	}
	public void reqPartOne() {
		User user = getSessionAttr("user");
		List<Que> ques = new PartOneQuestionService().getPartOneQuestions(user);
		renderJson(ques);
	}
	
	public void submitPaper(){
		
		boolean isSuccess = true;
		try {
		User user = getSessionAttr("user");
		String jsonStr = HttpKit.readData(getRequest());
		List<Paper> papers = new ArrayList<Paper>();
		if(jsonStr!=null && jsonStr.length()!=0 && jsonStr.length()!=3){		
		String[] ans = jsonStr.substring(1, jsonStr.length()-2).split(",");
		for(int i=0; i<ans.length; i++){
			Paper paper = new Paper();
			paper.setPaperCode(user.getPaperCode());
			paper.setStuId(user.getStuId());
			paper.setSchoolId(user.getSchoolId());
			paper.setGradeId(user.getGradeId());
			paper.setClassId(user.getClassId());
			paper.setStartTime(user.getStartTime());
			String[] tmp = ans[i].substring(1,ans[i].length()-1).split(":");
			paper.setQueCode(tmp[0]);
			paper.setQueAns(Integer.parseInt(tmp[1]));
			papers.add(paper);
		}
			new PartOneQuestionService().savePartOneAnswers(papers);
		}
		}catch(Exception ex) {
			isSuccess = false;
			ex.printStackTrace();
			
		}
		
		if (isSuccess == true) {
			setAttr("code", 0);
		}else if(isSuccess == false) {
			
			setAttr("code", 1);
		}
		
		renderJson();
	}
	 
}
