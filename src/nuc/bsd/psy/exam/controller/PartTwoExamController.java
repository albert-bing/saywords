package nuc.bsd.psy.exam.controller;

import java.util.ArrayList;
import java.util.List;

import nuc.bsd.psy.base.model.Paper;
import nuc.bsd.psy.base.model.Que;
import nuc.bsd.psy.base.model.User;
import nuc.bsd.psy.exam.service.PartOneQuestionService;
import nuc.bsd.psy.exam.service.PartTwoQuestionService;

import com.jfinal.core.Controller;
import com.jfinal.kit.HttpKit;

public class PartTwoExamController extends Controller {
	/**
	 * 默认首页方法
	 */
	public void index() {
		//render("zhunkaozheng.html");
		render("/Views/PartTwo/pbTest.html");
	}
	
	public void reqPartTwo() {
		User user = getSessionAttr("user");
		List<Que> ques = new PartTwoQuestionService().getPartTwoQuestions(user);
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
			new PartTwoQuestionService().savePartTwoAnswers(papers);
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